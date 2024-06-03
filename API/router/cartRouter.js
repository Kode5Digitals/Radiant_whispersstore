const express = require("express");
const router = express.Router();
const { getCartById, UserCart, increaceCart, decreaceCart } = require("../controllers/cart");


router.post("/cart/:userId/add", UserCart);
router.get("/cart/:userId", getCartById);
router.post('/cart/:userId/increase',increaceCart)
router.post('/cart/:userId/decrease',decreaceCart)
module.exports =router