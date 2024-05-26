const express = require("express");
const router = express.Router();
const {verifyPayment,createPayment} = require("../controllers/paystack");

router.post("/payment",createPayment)
router.get("/verifyPayment/:refrence",verifyPayment)
module.exports =router