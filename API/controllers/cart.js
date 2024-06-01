const express = require('express');
const router = express.Router();
const Cart = require('../models/cartModel');
const Product = require('../models/productsModel')

const calculateTotalPrice = async (cart) => {
  let totalPrice = 0;
  for (const item of cart.products) {
    const product = await Product.findById(item.productId);
    totalPrice += product.price * item.quantity;
  }
  cart.totalPrice = totalPrice;
  await cart.save();
};

// Add item to cart
const UserCart= async (req, res) => {
const { userId, productId, quantity } = req.body;
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      let cart = await Cart.findOne({ user: userId });
      if (!cart) {
        cart = new Cart({ user: userId, items: [], totalQuantity: 0, totalPrice: 0 });
      }
  
      const existingItemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
      if (existingItemIndex > -1) {
        cart.items[existingItemIndex].quantity += quantity;
        cart.items[existingItemIndex].price = product.price;
      } else {
        cart.items.push({ productId, quantity, price: product.price });
      }
  
      cart.totalQuantity += quantity;
      cart.totalPrice += product.price * quantity;
  
      await cart.save();
      res.status(200).json(cart);
    } catch (error) {
      console.error('Error adding to cart:', error);
      res.status(500).json({ error: 'Internal server error' });
    }


}

// Get cart
const getCartById= async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('products.productId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
    UserCart,
    getCartById
}
