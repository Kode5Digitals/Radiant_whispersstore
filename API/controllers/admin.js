const express = require("express");
const {  validationResult } = require("express-validator");
const AdminModel = require("../models/AdminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/env");
const productsModel = require("../models/productsModel");
const formidable = require("formidable");
const cloudinary = require("cloudinary").v2;

const Signup = async (req, res, next) => {
  const { name, email, password, confirmpassword } = req.body;
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.json({ error: error.array(), error_type: 0, created: false });
    return;
  }

  const findoneUser = await AdminModel.findOne({ email: email });
  if (findoneUser) {
    res.json({
      message: "Account already exist",
      error_type: 1,
      created: false,
    });
    return;
  }
  if (password !== confirmpassword) {
    res.json({
      message: "password do not match",
      error_type: 1,
      created: false,
    });
    return;
  }

  try {
    const salt = await bcrypt.genSalt(10);
    hashedpassword = await bcrypt.hash(password, salt);
    const user = new AdminModel({
      name,
      email,
      password: hashedpassword,
    });
    user.save().then((doc) => {
      const id = doc._id;
      const token = jwt.sign({ id }, jwtKey, { expiresIn: "7d" });
      res
        .cookie("jwtToken", token)
        .status(201)
        .send({ id, created: true, token, message: "sucessfully registered" });
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    res
      .status(500)
      .json({ error: "An error occurred during user registration" });
  }
};

const Login = async (req, res, next) => {
  const { email, password } = req.body;
  const error = validationResult(req);
  console.log("login");
  try {
    if (!error.isEmpty()) {
      res.json({ error: error.array(), error_type: 0, created: false });
      return;
    }
    const findone = await AdminModel.findOne({ email: email });
    if (!findone) {
      res.json({ message: "invalid account", error_type: 1, created: false });
      return;
    }

    await bcrypt.compare(password, findone.password, (err, isValid) => {
      if (isValid) {
        const id = findone._id;
        const token = jwt.sign({ id }, jwtKey, { expiresIn: "7d" });
        res
          .cookie("jwt_token", token)
          .status(200)
          .json({ message: "Loggin", token, created: true });
      } else {
        res.json({ message: "Invalid Account oooo", created: false });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const verifyAccount = async (req, res, next) => {
  res.status(200).json({ message: "verifyacct" });
};

const GetEditProduct = async (req, res) => {
  const productId = req.params.id;
  console.log("edit");
  console.log(productId);
  const product = await productsModel.findById(productId);
  console.log(product);
  res.json({ product });
};

const editProduct = async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    try {
      if (err) {
        return res.status(500).json({ error: "Error uploading file" });
      }

      const productId = req.params.id;
      const { name, price, description, category } = fields;

      // Prepare the updated fields
      const updatedFields = {
        name: fields.name[0],
        price: fields.price[0],
        description: fields.description[0],
        category: fields.category[0],
      };

      // If there's a new image file, upload it to Cloudinary
      if (files.image && files.image[0].filepath) {
        const foldername = "Radiantwhhispersstoreimages";
        const cloudinaryUploadResult = await cloudinary.uploader.upload(
          files.image[0].filepath,
          { folder: foldername }
        );
        updatedFields.image = cloudinaryUploadResult.secure_url;
      }

      // Update the product in the database
      await productsModel.findByIdAndUpdate(productId, updatedFields);
      res.status(200).json({ message: "Product updated successfully",created:true });
    } catch (error) {
      console.error("Error uploading file or saving product:", error);
      res.status(500).json({ error: "Error uploading file or saving product" ,created:false});
    }
  });
};



 const newArrivals=async (req, res) => {
    try {
      const newProducts = await  productsModel.find().sort({ createdAt: -1 }).limit(10); 
      res.json(newProducts);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  


module.exports = {
  Signup,
  Login,
  verifyAccount,
  editProduct,
  GetEditProduct,
  newArrivals
};
