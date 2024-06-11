const wishlistModel = require("../models/whishlistModel");




const getWhishlist=async (req, res) => {
    const { userId, sessionId } = req.query;
    try {
      const wishlists = await wishlistModel.find({ userId, sessionId }).populate({
        path: 'items.productId',
        model: 'Product' // This should match your Product model name
      });;
      console.log(wishlists)
      res.json({ message: 'Wishlists retrieved successfully', wishlists });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }



  const  addWishlist= async (req, res) => {
    const { productId, userId, sessionId } = req.body;

    try {
      // Determine filter based on userId or sessionId
      const filter = userId ? { userId } : { sessionId };
      
      // Find or create the wishlist
      let wishlist = await wishlistModel.findOne(filter);
      if (!wishlist) {
        wishlist = new wishlistModel({ userId, sessionId, items: [] });
      }
  
      // Check if the product already exists in the wishlist
      const isProductInWishlist = wishlist.items.some(item => item.productId.toString() === productId);
  
      if (!isProductInWishlist) {
        // Product is not in the wishlist, add it
        wishlist.items.push({ productId });
      }
  
      // Save the wishlist
      const savedWishlist = await wishlist.save();
      
      // Populate the wishlist with product details
      const populatedWishlist = await wishlistModel.findById(savedWishlist._id).populate({
        path: 'items.productId',
        model: 'Product' // This should match your Product model name
      });
      
      res.json({ message: 'Item added to wishlist successfully', wishlists: populatedWishlist });
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  
  };
  

  



const removeWhishlist  = async (req, res) => {
  const {productId,userId, sessionId} = req.body;
  try {
    let filter = userId ? { userId } : { sessionId };
    let wishlist = await wishlistModel.findOne(filter);

    if (!wishlist) {
      return res.status(404).json({ error: 'Wishlist not found' });
    }

    wishlist.items = wishlist.items.filter(item => item.productId.toString() !== productId);

    const savedWishlist = await wishlist.save();
    const populatedWishlist = await wishlistModel.findById(savedWishlist._id).populate('items.productId');
    res.json({ message: 'Item removed from wishlist successfully', wishlists: populatedWishlist });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};







module.exports = {
    getWhishlist,
   addWishlist,
   removeWhishlist
  }
  