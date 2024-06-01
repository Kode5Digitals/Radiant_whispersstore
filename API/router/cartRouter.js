const express = require("express");
const { getCartById, UserCart, } = require("../controllers/cart");
const router = express.Router();
router.post("/cart/add-to-cart", UserCart);
router.get("/cart/:userId", getCartById);
