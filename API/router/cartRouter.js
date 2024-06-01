const express = require("express");
const { getCartById, Cart } = require("../controllers/cart");
const router = express.Router();
router.post("/cart/add-to-cart", Cart);
router.get("/cart/:userId", getCartById);
