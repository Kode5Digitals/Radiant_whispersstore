const express = require("express");
const { check, validationResult } = require("express-validator");
const userModel = require("../models/userModel");
const adminModel=require("../models/AdminModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/env");

const Signup = async (req, res, next) => {
  const { fullname, email, password, confirmpassword } = req.body;
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.json({ error: error.array(),error_type:0,created:false});
    return;
  }
  const findoneUser = await userModel.findOne({ email: email });
  if (findoneUser) {
    res.json({ message: "Account already exist" ,error_type:1,created:false})
    return;
  }
  if (password !== confirmpassword) {
    res.json({ message: "password do not match" ,error_type:1,created:false});
    return;
  }

  try {
    const salt = await bcrypt.genSalt(10);
    hashedpassword = await bcrypt.hash(password, salt);
    const user = new userModel({
      fullname,
      email,
      password: hashedpassword,
    });
    user.save().then((doc) => {
      const id = doc._id;
      const token = jwt.sign({ id }, jwtKey, { expiresIn: "7d" });
      res
        .cookie("jwtToken", token)
        .status(201)
        .send({ id, created: true, token ,message:"sucessfilly registered" });
    });

  } catch (error) {
    console.error("Error during user registration:", error);
    res
      .status(500)
      .json({ error: "An error occurred during user registration" });
  }
};



const Login = async (req, res, next) => {
    console.log("login");
    console.log(req.body);
    const { email, password } = req.body;
    const errors = validationResult(req);
  
    try {
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), error_type: 0, created: false, isLoggedIn: false });
      }
  
      const user = await userModel.findOne({ email: email });
      const admin = await adminModel.findOne({ email: email });
  
      if (!user && !admin) {
        return res.status(400).json({ message: "Invalid account", error_type: 1, created: false, isLoggedIn: false });
      }
  
      let isValid = false;
      let isAdmin = false;
      let id;
  
      if (user) {
        isValid = await bcrypt.compare(password, user.password);
        id = user._id;
      } else if (admin) {
        isValid = await bcrypt.compare(password, admin.password);
        isAdmin = true;
        id = admin._id;
      }
  
      if (isValid) {
        const token = jwt.sign({ id, isAdmin }, jwtKey, { algorithm: 'HS256', expiresIn: '1h' });
        return res.status(200).json({ message: "Logged in", token, created: true, isLoggedIn: true, isAdmin });
      } else {
        return res.status(400).json({ message: "Invalid password", created: false, isLoggedIn: false });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error", isLoggedIn: false });
    }
  };
  

// const Login = async (req, res, next) => {
//   console.log("login");
//   console.log(req.body);
//   const { email, password } = req.body;
//   const errors = validationResult(req);
//   console.log("login");
//   try {
//     if (!errors.isEmpty()) {
//       res.json({ errors: errors.array(), error_type: 0, created: false });
//       return;
//     }
//     const user = await userModel.findOne({ email: email });
//     const admin = await adminModel.findOne({ email: email });
//     const isAdmin = !!admin;

//     if (!user || !admin) {
//         return res.json({ message: "Invalid account", error_type: 1, created: false });
//     }
    
//     const isValidUser = await bcrypt.compare(password, user.password);
//     const isValidAdmin = await bcrypt.compare(password, admin.password);
//     if (isValidUser || isValidAdmin) {
//       const id = user._id;
//       const token = jwt.sign({ id }, jwtKey, { algorithm: 'HS256', expiresIn: '1h' });
//       res.status(200).json({ message: "Logged in", token, created: true ,isLoggedIn: true, isAdmin });
//     } else {
//       res.json({ message: "Invalid password", created: false ,isLoggedIn: false });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal server error",isLoggedIn: false  });
//   }
// };




const verifyAccount = async (req, res, next) => {
  res.status(200).json({ message: "verifyacct" });
};



const deleteAllUser=async(req,res)=>{
    try {
        await userModel.deleteMany({})
        res.status(200).json({ message: 'All users deleted successfully.' });
    } catch (error) {
        console.error('Error deleting documents:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
  Signup,
  Login,
  verifyAccount,
  deleteAllUser
};
