const express = require('express');
const router = express.Router();
const Cart = require('../models/cartModel');
const Product = require('../models/productsModel')

// Add item to cart
const UserCart= async (req, res) => {
    const { userId, sessionId, productId, quantity } = req.body;
    console.log("herer",req.body)
    if (!sessionId) {
        return res.status(400).json({ message: 'SessionId is required' });
    }
    
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found', error_type: 1, created: false });
        }
    
        let cart = await Cart.findOne({ sessionId }).populate('products.productId');
    
        if (cart) {
            const productIndex = cart.products.findIndex(p => p.productId.equals(productId));
            if (productIndex > -1) {
                return res.status(400).json({ message: 'Product already in cart', error_type: 1, created: false });
            } else {
                cart.products.push({ productId, quantity });
                await cart.populate('products.productId').execPopulate();
                cart.calculateTotals();
                await cart.save();
                return res.status(200).json({ message: 'Product added to cart', cart, created: true });
            }
        } else {
            cart = new Cart({ sessionId, userId, products: [{ productId, quantity }] });
            await cart.populate('products.productId');
            cart.calculateTotals();
            await cart.save();
            return res.status(201).json({ message: 'Cart created and product added', cart, created: true });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' })}
    // if (!userId && !sessionId) {
    //     return res.status(400).json({ message: 'UserId or sessionId is required' });
    //   }
    // try {
    //     const product = await Product.findById(productId);
    //     if (!product) {
    //       return res.json({ message: 'Product not found',error_type:1 ,created:false});
    //     }
    
    //     let cart;
    //     if (userId) {
    //       cart = await Cart.findOne({ userId }).populate('products.productId');
    //     } else if (sessionId) {
    //       cart = await Cart.findOne({ sessionId }).populate('products.productId');
    //     }
    
    //     if (cart) {
    //       const productIndex = cart.products.findIndex(p => p.productId.equals(productId));
    //       if (productIndex > -1) {
    //         return res.json({ message: 'Product already in cart',error_type:1 ,created:false});
    //       } else {
    //         cart.products.push({ productId, quantity });
    //         await cart.populate('products.productId');
    //         cart.calculateTotals();
    //         await cart.save();
    //         return res.json({ message: 'Product added to cart', cart ,created:true});
    //       }
    //     }
    //      else {
    //       cart = new Cart({sessionId, products: [{ productId, quantity }] });
    //     //   await cart.populate('products.productId');
    //       cart.calculateTotals();
    //       await cart.save();
    //       return res.json({ message: 'Cart created and product added', cart, created: true });
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: 'Internal server error' });
    //   }
}



const increaceCart= async (req, res) => {
    const { userId, sessionId, productId, quantity } = req.body;
    if (!userId && !sessionId) {
        return res.status(400).json({ message: 'UserId or sessionId is required' });
      }
try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
  
    let cart;
    if (userId) {
      cart = await Cart.findOne({ userId }).populate('products.productId');
    } else if (sessionId) {
      cart = await Cart.findOne({ sessionId }).populate('products.productId');
    } else {
      return res.status(400).json({ message: 'UserId or sessionId required' });
    }
  
    if (cart) {
      const productIndex = cart.products.findIndex(p => p.productId.equals(productId));
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
        cart.calculateTotals();
        await cart.save();
        await cart.populate('products.productId')
        return res.status(200).json({ message: 'Product quantity increased', cart });
      } else {
        return res.status(404).json({ message: 'Product not in cart' });
      }
    } else {
      cart = new Cart({  sessionId, products: [{ productId, quantity }] });
      cart.calculateTotals();
      await cart.save();
      await cart.populate('products.productId'); // Populate after saving
      return res.status(200).json({ message: 'Cart created and product added', cart, created: true });
    }
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
   
  }
  

  
const decreaceCart= async (req, res) => {
    const { userId, productId, quantity,sessionId } = req.body;
    if (!userId && !sessionId) {
        return res.status(400).json({ message: 'UserId or sessionId is required' });
      }
    try {
        let cart;
        if (userId) {
          cart = await Cart.findOne({ userId }).populate('products.productId');
        } else if (sessionId) {
          cart = await Cart.findOne({ sessionId }).populate('products.productId');
        } else {
          return res.status(400).json({ message: 'UserId or sessionId required' });
        }
    
        if (!cart) {
          return res.status(404).json({ message: 'Cart not found' });
        }
    
        const productIndex = cart.products.findIndex(p => p.productId.equals(productId));
        if (productIndex !== -1) {
          const product = cart.products[productIndex];
          if (product.quantity > 1) {
            product.quantity -= 1;
            cart.calculateTotals();
            await cart.save();
            return res.status(200).json({ message: 'Product quantity decreased', cart });
          } else {
            return res.status(400).json({ message: 'Quantity cannot be less than 1' });
          }
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
    if (!userId && !sessionId) {
        return res.status(400).json({ message: 'UserId or sessionId is required' });
      }
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
  }
  
  const removeCart= async (req, res) => {
    const { productId,userId,sessionId} = req.body;
    if (!userId && !sessionId) {
        return res.status(400).json({ message: 'UserId or sessionId is required' });
      }
  try {
    let cart;
    if (userId) {
      cart = await Cart.findOne({ userId }).populate('products.productId');
    } else if (sessionId) {
      cart = await Cart.findOne({ sessionId }).populate('products.productId');
    } else {
      return res.json({ message: 'UserId or sessionId required' });
    }

    if (!cart) {
      return res.json({ message: 'Cart not found' });
    }

    const productIndex = cart.products.findIndex(p => p.productId.equals(productId));
    if (productIndex > -1) {
      cart.products.splice(productIndex, 1);
      cart.calculateTotals();
      await cart.save();
      return res.json({ message: 'Product removed from cart', cart });
    } else {
      return res.json({ message: 'Product not in cart' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
//   try {
//     let cart;
//     if (userId) {
//       cart = await Cart.findOne({ userId }).populate('products.productId');
//     } else if (sessionId) {
//       cart = await Cart.findOne({ sessionId }).populate('products.productId');
//     } else {
//       return res.json({ message: 'UserId or sessionId required' });
//     }

//     if (!cart) {
//       return res.json({ message: 'Cart not found' });
//     }

//     const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
//     if (productIndex > -1) {
//       cart.products.splice(productIndex, 1);
//       cart.calculateTotals();
//       await cart.save();
//       return res.json({ message: 'Product removed from cart', cart });
//     } else {
//       return res.json({ message: 'Product not in cart' });
//     }

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
    // try {
    //     let cart;
    //     if (userId) {
    //       cart = await Cart.findOne({ userId }).populate('products.productId');
    //     } else if (sessionId) {
    //       cart = await Cart.findOne({ sessionId }).populate('products.productId');
    //     } else {
    //       return res.status(400).json({ message: 'UserId or sessionId required' });
    //     }
    
    //     if (!cart) {
    //       return res.status(404).json({ message: 'Cart not found' });
    //     }
    
    //     const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    //     if (productIndex > -1) {
    //       cart.products.splice(productIndex, 1);
    //       cart.calculateTotals();
    //       await cart.save();
    //       return res.status(200).json({ message: 'Product removed from cart', cart });
    //     } else {
    //       return res.status(404).json({ message: 'Product not in cart' });
    //     }
    
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: 'Internal server error' });
    //   }
    
    
  }
  
  const ClearAllCart= async (req, res) => {
    const {userId,sessionId} = req.body;
    if (!userId && !sessionId) {
        return res.status(400).json({ message: 'UserId or sessionId is required' });
      }
    try {
        let cart;
        if (userId) {
          cart = await Cart.findOne({ userId }).populate('products.productId');
        } else if (sessionId) {
          cart = await Cart.findOne({ sessionId }).populate('products.productId');
        } else {
          return res.status(400).json({ message: 'UserId or sessionId required' });
        }
    
        if (!cart) {
          return res.status(404).json({ message: 'Cart not found' });
        }
    
        cart.products = [];
        cart.calculateTotals();
        await cart.save();
        return res.status(200).json({ message: 'All products removed from cart', cart });
    
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
