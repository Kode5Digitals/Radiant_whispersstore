const express = require("express");
const router = express.Router();
const PaystackHandler = require("../controllers/paystack");
router.post("/paystack",PaystackHandler)
module.exports =router