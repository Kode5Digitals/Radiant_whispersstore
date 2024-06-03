const express = require("express");
const router = express.Router();
const { getCartById, UserCart } = require("../controllers/cart");


router.post("/cart/:userId/add", UserCart);
router.get("/cart/:userId", getCartById);
module.exports =router