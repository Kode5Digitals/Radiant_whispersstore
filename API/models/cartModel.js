
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  products: [
    {
      productId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', // Correct reference to the Product model
        required: true 
      },
      quantity: { 
        type: Number, 
        required: true 
      }
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

 

// const mongoose = require('mongoose');

// const cartSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
//   items: [{
//     productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true },
//     quantity: { type: Number, required: true },
//     price: { type: Number, required: true },
//   }],
//   totalQuantity: { type: Number, default: 0 },
//   totalPrice: { type: Number, default: 0 },
// }, 
// { timestamps: true });

// module.exports = mongoose.model('Cart', cartSchema);

