const express = require("express");
const { getWishlist, addWishlist, removeWishlist } = require("../controllers/whishlist");
const router = express.Router();

router.get("/wishlistsItems",getWishlist);
router.post("/addwishlist",addWishlist)
router.delete('/removewishlist', removeWishlist)
module.exports = router;