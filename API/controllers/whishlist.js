const wishlistModel = require("../models/whishlistModel");




const getWhishlist=async (req, res) => {
    const { userId, sessionId } = req.query;
    try {
      const wishlists = await wishlistModel.find({ userId, sessionId });
      res.json({ message: 'Wishlists retrieved successfully', wishlists });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }





  const addWishlist = async (req, res) => {
    const { userId, sessionId, wishlists } = req.body;
  
    try {
      let filter;
      let existingWishlist;
  
      // First, try to find the wishlist by userId
      if (userId) {
        filter = { userId };
        existingWishlist = await wishlistModel.findOne(filter);
      }
  
      // If no wishlist found by userId, try to find by sessionId
      if (!existingWishlist && sessionId) {
        filter = { sessionId };
        existingWishlist = await wishlistModel.findOne(filter);
      }
  
      // If no existing wishlist found, create a new one
      if (!existingWishlist) {
        const newWishlist = new wishlistModel({ userId, sessionId, wishlists });
        const savedWishlist = await newWishlist.save();
        return res.json({ message: 'Wishlist created successfully', wishlist: savedWishlist });
      }
  
      // If an existing wishlist is found, update it
      const update = { userId, sessionId, wishlists };
      const options = { new: true, upsert: true };
  
      const upsertedWishlist = await wishlistModel.findOneAndUpdate(filter, update, options);
      res.json({ message: 'Wishlist updated successfully', wishlist: upsertedWishlist });
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  


  const removeWhishlist= async (req, res) => {
  const { id } = req.params;
  try {
    await wishlistModel.findByIdAndDelete(id);
    res.json({ message: 'Wishlist deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = {
    getWhishlist,
   addWishlist,
   removeWhishlist
  }
  