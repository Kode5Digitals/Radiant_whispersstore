const express = require("express");
const router = express.Router();
const PaystackHandler = require("../controllers/paystack");
router.post("/payment",PaystackHandler)
module.exports =router