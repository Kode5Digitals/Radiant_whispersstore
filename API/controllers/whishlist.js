const wishlistModel = require("../models/whishlistModel");




const getWishlist=async (req, res) => {
    const { userId, sessionId } = req.query;
    try {
      const wishlists = await wishlistModel.findOne({ userId, sessionId }).populate({
        path: 'items.productId',
        model: 'Product' // This should match your Product model name
      });;
      res.json({ message: 'Wishlists retrieved successfully', wishlists });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }



  const  addWishlist= async (req, res) => {
    const { productId, userId, sessionId } = req.body;

    try {
      const filter = userId ? { userId } : { sessionId };
      
      let wishlist = await wishlistModel.findOne(filter);
      if (!wishlist) {
        // wishlist = new wishlistModel({ userId, sessionId, items: [] });
        const newWishlistData = userId ? { userId, items: [] } : { sessionId, items: [] };
        wishlist = new wishlistModel(newWishlistData);
      }
  
      const isProductInWishlist = wishlist.items.some(item => item.productId.toString() === productId);
  
      if (!isProductInWishlist) {
        wishlist.items.push({ productId });
      }
      else{
     return   res.json({ message: 'Item already in wishlist',added:false });
      }
  
      const savedWishlist = await wishlist.save();
      const populatedWishlist = await wishlistModel.findById(savedWishlist._id).populate({
        path: 'items.productId',
        model: 'Product' 
      });
      
      res.json({ message: 'Item added to wishlist successfully', wishlists: populatedWishlist ,added:true });
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  
  };
  

  



const removeWishlist  = async (req, res) => {
  const {productId,userId, sessionId} = req.body;
  console.log("removewhish:",req.body)
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



 const clearWishlist = async (req, res) => {
  const { userId, sessionId } = req.body;
  try {
    let filter = userId ? { userId } : { sessionId };
    let wishlist = await wishlistModel.findOne(filter).populate('items.productId');
    if (wishlist) {
      wishlist.items = [];
      const savedWishlist = await wishlist.save();
      res.json({ message: 'Wishlist cleared successfully', wishlist: savedWishlist });
    } else {
      res.status(404).json({ message: 'Wishlist not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}




module.exports = {
    getWishlist,
   addWishlist,
   removeWishlist,
   clearWishlist
  }
  