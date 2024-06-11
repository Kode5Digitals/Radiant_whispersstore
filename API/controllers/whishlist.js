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
      const {productId,userId,sessionId} = req.body;
    try {
      let filter = userId ? { userId } : { sessionId };
      let wishlist = await wishlistModel.findOne(filter);
  
      if (!wishlist) {
        wishlist = new wishlistModel({ userId, sessionId, items: [] });
      }
  
      const itemIndex = wishlist.items.findIndex(item => item.productId.toString() === productId);
  
      if (itemIndex > -1) {
        wishlist.items[itemIndex].quantity += quantity;
      } else {
        wishlist.items.push({ productId});
      }
  
      const savedWishlist = await wishlist.save();
      const populatedWishlist = await wishlistModel.findById(savedWishlist._id).populate('items.productId');
      res.json({ message: 'Item added to wishlist successfully', wishlist: populatedWishlist });
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  // const addWishlist = async (req, res) => {
  //   const {wishlists } = req.body;
  //   const { userId, sessionId } = req.query;
  
  //   try {
  //     let filter;
  //     let existingWishlist;
  
  //     // First, try to find the wishlist by userId
  //     if (userId) {
  //       filter = { userId };
  //       existingWishlist = await wishlistModel.findOne(filter);
  //     }
  
  //     // If no wishlist found by userId, try to find by sessionId
  //     if (!existingWishlist && sessionId) {
  //       filter = { sessionId };
  //       existingWishlist = await wishlistModel.findOne(filter);
  //     }
  
  //     // If no existing wishlist found, create a new one
  //     if (!existingWishlist) {
  //       const newWishlist = new wishlistModel({ userId, sessionId, wishlists });
  //       const savedWishlist = await newWishlist.save();
  //       return res.json({ message: 'Wishlist created successfully', wishlist: savedWishlist });
  //     }
  
  //     // If an existing wishlist is found, update it
  //     const update = { userId, sessionId, wishlists };
  //     const options = { new: true, upsert: true };
  
  //     const upsertedWishlist = await wishlistModel.findOneAndUpdate(filter, update, options);
  //     res.json({ message: 'Wishlist updated successfully', wishlist: upsertedWishlist });
  
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // };
  


//   const removeWhishlist= async (req, res) => {
//   const { id } = req.params;
//   try {
//     await wishlistModel.findByIdAndDelete(id);
//     res.json({ message: 'Wishlist deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

const removeWhishlist  = async (req, res) => {
  const {productId} = req.body;
  const { userId, sessionId } = req.query;
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
  