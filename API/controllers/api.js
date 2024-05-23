const express = require("express");
const {  validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/env");
const productsModel = require("../models/productsModel");
const formidable = require("formidable");
const cloudinary = require("cloudinary").v2;



const GetEditProduct = async (req, res) => {
    const productId = req.params.id;
    // console.log("edit");
    // console.log(productId);
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
  
  
  
 
    
module.exports = {
    editProduct,
    GetEditProduct
  };
  