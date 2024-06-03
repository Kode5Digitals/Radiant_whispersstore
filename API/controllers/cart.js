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
    const { productId, quantity } = req.body;
    const userId = req.params.userId;
  
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        cart = new Cart({ userId, products: [] });
      }
  
      const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
  
      await cart.populate('products.productId').execPopulate();
      cart.calculateTotals();
      await cart.save();
  
      res.status(200).json({ message: 'Product added to cart', cart });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }

}

// Get cart
const getCartById= async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId })
          .populate('products.productId'); // Populate product details
    
        if (!cart) {
          return res.status(404).json({ message: 'Cart not found' });
        }
    
        let totalQuantity = 0;
        let totalPrice = 0;
    
        const cartWithProductDetails = cart.products.map(productItem => {
          const quantity = productItem.quantity;
          const price = productItem.productId.price;
          totalQuantity += quantity;
          totalPrice += price * quantity;
    
          return {
            productId: productItem.productId._id,
            name: productItem.productId.name,
            description: productItem.productId.description,
            image: productItem.productId.image,
            category:productItem.productId.category,
            price,
            quantity
          };


        })
}
catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }}







module.exports = {
    UserCart,
    getCartById
}
