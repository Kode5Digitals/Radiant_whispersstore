const express = require("express");
const router = express.Router();
const {verifyPayment,createPayment} = require("../controllers/paystack");

router.post("/payment",createPayment)
module.exports =router