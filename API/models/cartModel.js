const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartProductSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, default: 1 }
});

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  products: [cartProductSchema],
  totalQuantity: { type: Number, required: true, default: 0 },
  totalPrice: { type: Number, required: true, default: 0 }
}, { timestamps: true });

cartSchema.methods.calculateTotals = function () {
  this.totalQuantity = this.products.reduce((acc, item) => acc + item.quantity, 0);
  this.totalPrice = this.products.reduce((acc, item) => acc + (item.quantity * item.productId.price), 0);
};

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
