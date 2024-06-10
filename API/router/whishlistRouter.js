const express = require("express");
const { getWhishlist, addWishlist, removeWhishlist } = require("../controllers/whishlist");
const router = express.Router();

router.get("/wishlistsItems",getWhishlist);
router.post("/addwishlist",addWishlist)
router.delete('/removewishlist', removeWhishlist)
module.exports = router;