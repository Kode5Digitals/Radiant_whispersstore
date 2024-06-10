const whishlistModel = require("../models/whishlistModel");




const getWhishlist=async (req, res) => {
    const { userId, sessionId } = req.query;
    try {
      const wishlists = await whishlistModel.find({ userId, sessionId });
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
        existingWishlist = await Wishlist.findOne(filter);
      }
  
      // If no wishlist found by userId, try to find by sessionId
      if (!existingWishlist && sessionId) {
        filter = { sessionId };
        existingWishlist = await whishlistModel.findOne(filter);
      }
  
      // If no existing wishlist found, create a new one
      if (!existingWishlist) {
        const newWishlist = new whishlistModel({ userId, sessionId, whishlists });
        const savedWishlist = await newWishlist.save();
        return res.json({ message: 'Wishlist created successfully', wishlist: savedWishlist });
      }
  
      // If an existing wishlist is found, update it
      const update = { userId, sessionId, whishlists };
      const options = { new: true, upsert: true };
  
      const upsertedWishlist = await Wishlistm.findOneAndUpdate(filter, update, options);
      res.json({ message: 'Wishlist updated successfully', wishlist: upsertedWishlist });
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  


  const removeWhishlist= async (req, res) => {
  const { id } = req.params;
  try {
    await whishlistModel.findByIdAndDelete(id);
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
  