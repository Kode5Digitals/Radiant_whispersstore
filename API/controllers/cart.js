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
    const { userId, sessionId, productId, quantity } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) {
          return res.status(404).json({ message: 'Product not found',error_type:1 });
        }
    
        let cart;
        if (userId) {
          cart = await Cart.findOne({ userId }).populate('products.productId');
        } else if (sessionId) {
          cart = await Cart.findOne({ sessionId }).populate('products.productId');
        }
    
        if (cart) {
          const productIndex = cart.products.findIndex(p => p.productId.equals(productId));
          if (productIndex > -1) {
            return res.status(400).json({ message: 'Product already in cart',error_type:1 });
          } else {
            cart.products.push({ productId, quantity });
            await cart.populate('products.productId');
            cart.calculateTotals();
            await cart.save();
            return res.status(200).json({ message: 'Product added to cart', cart ,created:true});
          }
        } else {
          cart = new Cart({ userId, sessionId, products: [{ productId, quantity }] });
          await cart.populate('products.productId');
          cart.calculateTotals();
          await cart.save();
          return res.status(200).json({ message: 'Cart created and product added', cart, created: true });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
//   try {
//     const product = await Product.findById(productId);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     let cart;
//     if (userId) {
//       cart = await Cart.findOne({ userId }).populate('products.productId');
//     } else if (sessionId) {
//       cart = await Cart.findOne({ sessionId }).populate('products.productId');
//     }

//     if (cart) {
//       const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
//       if (productIndex > -1) {
//         return res.status(400).json({ message: 'Product already in cart' });
//       } else {
//         cart.products.push({ productId, quantity });
//         await cart.populate('products.productId');
//         cart.calculateTotals();
//         await cart.save();
//         return res.status(200).json({ message: 'Product added to cart', cart });
//       }
//     } else {
//       cart = new Cart({ userId, sessionId, products: [{ productId, quantity }] });
//       await cart.populate('products.productId');
//       cart.calculateTotals();
//       await cart.save();
//       return res.status(200).json({ message: 'Cart created and product added', cart, created: true });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }

    //       cart = await Cart.findOne({ userId }).populate('products.productId');
    //     } else if (sessionId) {
    //       cart = await Cart.findOne({ sessionId }).populate('products.productId');
    //     }
    
    //     if (!cart) {
    //       cart = new Cart({ userId, sessionId, products: [] });
    //     }
    
    //     const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    //     if (productIndex===-1) {
    //         cart.products.push({ productId, quantity });
    //       await cart.populate('products.productId');
    //       cart.calculateTotals();
    //       await cart.save();
    //       return res.status(200).json({ message: 'Product added to cart', cart,created:true });
         
    //     } else {
    //         return res.status(400).json({ message: 'Product already in cart' });
    //     }
    //      if (productIndex > -1) {
    //         cart.products[productIndex].quantity += quantity;
    //       } else {
    //         cart.products.push({ productId, quantity });
    //       }
    //     cart.calculateTotals();
    //     await cart.save();
    //          res.status(200).json({ message: 'Product added to cart', cart });
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: 'Internal server error' });
    //   }
       
    //     let cart;
    //     if (userId) {
    //       cart = await Cart.findOne({ userId });
    //     } else if (sessionId) {
    //       cart = await Cart.findOne({ sessionId });
    //     }
    
    //     if (!cart) {
    //       cart = new Cart({ userId, sessionId, products: [] });
    //     }
    //     const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    //     // if (productIndex === -1) {
    //     //   cart.products.push({ productId, quantity });
    //     //   await cart.populate('products.productId');
    //     //   cart.calculateTotals();
    //     //   await cart.save();
    //     //   return res.status(200).json({ message: 'Product added to cart', cart,created:true });
    //     // } else {
    //     //   return res.status(400).json({ message: 'Product already in cart' });
    //     // }
    //     if (productIndex > -1) {
    //         cart.products[productIndex].quantity += quantity;
    //       } else {
    //         cart.products.push({ productId, quantity });
    //       }
      
    //       await cart.populate('products.productId').execPopulate();
    //       cart.calculateTotals();
    //       await cart.save();
      
    //       res.status(200).json({ message: 'Product added to cart', cart });
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: 'Internal server error' });
    //   }

}



const increaceCart= async (req, res) => {
 
    const { productId, quantity } = req.body;
    const userId = req.params.userId;
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
        await cart.populate('products.productId');
        cart.calculateTotals();
        await cart.save();
        return res.status(200).json({ message: 'Product quantity increased', cart });
      } else {
        return res.status(404).json({ message: 'Product not in cart' });
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  

  
const decreaceCart= async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
      if (productIndex > -1) {
        cart.products[productIndex].quantity -= quantity;
        if (cart.products[productIndex].quantity <= 0) {
          cart.products.splice(productIndex, 1);
        }
        await cart.populate('products.productId');
        cart.calculateTotals();
        await cart.save();
        return res.status(200).json({ message: 'Product quantity decreased', cart });
      } else {
        return res.status(404).json({ message: 'Product not in cart' });
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  


// Get cart
  const getCartById = async (req, res) => {
    const { userId, sessionId } = req.query;

    try {
      let cart
      if (userId) {
        cart = await Cart.findOne({ userId }).populate('products.productId');
      } else if (sessionId) {
        cart = await Cart.findOne({ sessionId }).populate('products.productId');
      } else {
        return res.status(400).json({ message: 'UserId or SessionId is required' });
      }
  
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      cart.calculateTotals();
      await cart.save();
  
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }


//     const userId = req.params.userId;
  
//     try {
//       const cart = await Cart.findOne({ userId }).populate('products.productId');
//       if (!cart) {
//         return res.status(404).json({ message: 'Cart not found' });
//       }
  
//       res.status(200).json(cart);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
  }
  
  const removeCart= async (req, res) => {
    const { productId} = req.body;
    const userId = req.params.userId;
    try {
      let cart = await Cart.findOne({ userId }).populate('products.productId');
  
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      const productIndex = cart.products.findIndex(p => p.productId._id.toString() === productId);
      
      if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found in cart' });
      }
  
      cart.products.splice(productIndex, 1);
  
      cart.calculateTotals();
  
      await cart.save();
  
      res.status(200).json({ message: 'Product removed from cart', cart });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  
  const ClearAllCart= async (req, res) => {
    const userId = req.params.userId;
  
    try {
      let cart = await Cart.findOne({ userId }).populate('products.productId');
  
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
      cart.products = [];
      cart.calculateTotals();
      await cart.save();
  
      res.status(200).json({ message: 'All products removed from cart', cart });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  


module.exports = {
    UserCart,
    getCartById,
    increaceCart,
    decreaceCart,
    removeCart,
    ClearAllCart
}
