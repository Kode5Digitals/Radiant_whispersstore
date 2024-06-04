const express = require("express");
const router = express.Router();
const { getCartById, UserCart, increaceCart, decreaceCart, removeCart, ClearAllCart } = require("../controllers/cart");


router.post("/cart/:userId/add", UserCart);
router.get("/cart/:userId", getCartById);
router.post('/cart/:userId/increase',increaceCart)
router.post('/cart/:userId/decrease',decreaceCart)
router.post('/cart/:userId/remove',removeCart)
router.post('/cart/:userId/clearAll',ClearAllCart)
module.exports =router