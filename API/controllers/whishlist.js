const whishlistModel = require("../models/whishlistModel");
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
      
      res.json({ message: 'Item added to wishlist successfully', wishlist: populatedWishlist });
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  //   const { productId, userId, sessionId } = req.body;

  // try {
  //   const filter = userId ? { userId } : { sessionId };
    
  //   let wishlist = await wishlistModel.findOne(filter);
  //   if (!wishlist) {
  //     wishlist = new wishlistModel({ userId, sessionId, items: [] });
  //   }

  //   const itemIndex = wishlist.items.findIndex(item => item.productId.toString() === productId);

  //   if (itemIndex === -1) {
  //     // Add new item to wishlist only if it does not exist
  //     wishlist.items.push({ productId });
  //   }
  //   // Save the wishlist
  //   const savedWishlist = await wishlist.save();
    
  //   const populatedWishlist = await wishlistModel.findById(savedWishlist._id).populate('items.productId');
  //   res.json({ message: 'Item added to wishlist successfully', wishlist: populatedWishlist });

  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
   
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
    res.json({ message: 'Item removed from wishlist successfully', wishlist: populatedWishlist });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};







module.exports = {
    getWhishlist,
   addWishlist,
   removeWhishlist
  }
  