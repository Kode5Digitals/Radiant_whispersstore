const express = require("express");
const { getWhishlist, addWishlist, removeWhishlist } = require("../controllers/whishlist");
const router = express.Router();

router.get("/whishlistsItems",getWhishlist);
router.post("/addwhishlist",addWishlist)
router.delete('/removewhishlist', removeWhishlist)
module.exports = router;