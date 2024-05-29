const express = require("express");
const { check, validationResult } = require("express-validator");
const AdminModel = require("../models/AdminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtKey, JWT_KEY } = require("../config/env");

const AdminSignup = async (req, res, next) => {
  const { fullname, email, password, confirmpassword } = req.body;
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.json({ error: error.array(),error_type:0,created:false});
    return;
  }
  const findoneUser = await AdminModel.findOne({ email: email });
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
    const user = new AdminModel({
      fullname,
      email,
      password: hashedpassword,
    });
    user.save().then((doc) => {
      const id = doc._id;
      const token = jwt.sign({ id }, JWT_KEY, { expiresIn: "7d" });
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

// const Login = async (req, res, next) => {
//   const { email, password } = req.body;
//   const error = validationResult(req);
//   console.log("login")
//   try {
//     if (!error.isEmpty()) {
//       res.json({ error: error.array() ,error_type:0,created:false});
//       return;
//     }
//     const findone = await userModel.findOne({ email: email });
//     if (!findone) {
//       res.json({ message: "invalid account",error_type:1,created:false });
//       return;
//     }

//     const isValid =  await bcrypt.compare(password, findone.password, (err, isValid) => {
//       if (isValid) {
//         const id = findone._id;
//         const signOptions = {
//           algorithm: 'HS256',
//           expiresIn: '1h'
//         };
        
//         const token = jwt.sign({ id }, jwtKey, signOptions);
//         res.status(200).json({ message: "Loggin",token,created:true });
//       } else {
//         res.json({ message: "Invalid Account oooo",created:false });
//       }
//     });
//   } catch (error) {
//     console.log(error)
//   }
// };





const verifyAccount = async (req, res, next) => {
  res.status(200).json({ message: "verifyacct" });
};

module.exports = {
  AdminSignup,
  verifyAccount,
};
