const express = require("express");
const router = express.Router();
const { check} = require("express-validator");
const { AddProduct, AllProduct, GetProduct, DeleteAllProduct, searchProduct, category} = require("../controllers/products");

router.get("/allProducts",AllProduct);
router.post("/addProduct", 
 [
    check("name", "Enter Product Name").not().isEmpty(),
    check("price", " price").not().isEmpty(),
    check("image", "Add Image Link").not().isEmpty(),
    check("description", "Enter Product Description").not().isEmpty(),
  ],
  AddProduct
);
router.get("/getProduct/:id",GetProduct);
router.delete("/DeleteAll",DeleteAllProduct);
router.get("/",searchProduct);
router.get("/category/:categoryName",category);

module.exports =router