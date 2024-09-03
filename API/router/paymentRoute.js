const express = require("express");
const router = express.Router();
const {verifyPayment,createPayment, requestKey} = require("../controllers/paystack");

router.post("/payment",createPayment)
router.get("/verifyPayment/:reference",verifyPayment)
router.get("/key",requestKey)
module.exports =router