const express = require("express");
const router = express.Router();
const { check} = require("express-validator");
const { AddProduct, AllProduct, GetProduct, DeleteAllProduct, searchProduct, category, getCart, retrivCart} = require("../controllers/products");
const auth = require("../middleware/auth");

const validationMiddlewares=[
  check("name", "Enter Product Name").not().isEmpty(),
    check("price", " enter price").not().isEmpty(),
    check("image", "Add Image Link").not().isEmpty(),
    check("description", "Enter Product Description").not().isEmpty(),
    check("category", "Enter Product category").not().isEmpty(),
]


router.get("/allProducts",AllProduct);
router.post("/addProduct", AddProduct);
router.get("/getProduct/:id",GetProduct);
router.delete("/DeleteAll",DeleteAllProduct);
router.get("/",searchProduct);
router.get("/category/:categoryName",category);
router.get("/api/cart",getCart)
router.post("/api/cart",retrivCart)

module.exports =router