const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WishlistItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
});

const WishlistSchema = new Schema({
  userId: { type: String, required: false },
  sessionId: { type: String, required: false, unique: true, },
  wishlists: [WishlistItemSchema],
}, {
  timestamps: true,
});

WishlistSchema.pre('save', function(next) {
  if (!this.userId && !this.sessionId) {
    next(new Error('Either userId or sessionId must be provided.'));
  } else {
    next();
  }
});

module.exports = mongoose.model('Wishlist', WishlistSchema);
