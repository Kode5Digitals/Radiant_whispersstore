const express = require("express");
const router = express.Router();
const {verifyPayment,createPayment, requestKey} = require("../controllers/paystack");
const { check } = require("express-validator");

  const registerValMiddleware = [
    check("firstname", "Enter fullname").not().isEmpty(),
    check("email", "Enter a valid email").not().isEmpty().isEmail(),
    check("lastname", "Enter lastname").not().isEmpty(),
    check("address", "Enter address").not().isEmpty()
];

router.post("/payment", registerValMiddleware ,createPayment)
router.get("/verifyPayment/:reference",verifyPayment)
router.get("/key",requestKey)
module.exports =router