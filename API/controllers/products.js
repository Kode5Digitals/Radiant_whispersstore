const productsModel=require("../models/productsModel")
const cloudinary = require('cloudinary').v2;
const formidable = require('formidable');
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const { CloudApi_key, CloudApi_secret, Cloud_name } = require("../config/env");


cloudinary.config({
  cloud_name: Cloud_name,
  api_key: CloudApi_key,
  api_secret: CloudApi_secret
})


const AddProduct = async (req, res) => {

  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), error_type: 0, created: false });
    }
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error parsing form data' });
    }

    

    try {
      const { name, price, description, category } = fields;
      const imageFile = files.image ? files.image[0].filepath : null;

      if (!name || !price || !description || !category || !imageFile) {
        return res.status(400).json({ error: 'Missing required fields', error_type: 1, created: false });
      }

      const cloudinaryUploadResult = await cloudinary.uploader.upload(imageFile, {
        folder: "Radiantwhhispersstoreimages"
      });

      const findoneProduct = await productsModel.findOne({ name });
      if (findoneProduct) {
        return res.status(400).json({ message: "Product already exists", error_type: 1, created: false });
      }

      const newProduct = new productsModel({
        name,
        price,
        image: cloudinaryUploadResult.secure_url,
        description,
        category
      });

      const savedProduct = await newProduct.save();
      res.status(201).json({ prod: savedProduct, created: true, status: 1, message: "Product added" });

    } catch (error) {
      console.error('Error uploading file or saving product:', error);
      res.status(500).json({ error: 'Error uploading file or saving product', created: false });
    }
  });
};

// const AddProduct=async(req,res)=>{   
//   const form = new formidable.IncomingForm();
//   form.parse(req, async(err, fields, files) => {
//         try {
//           if (err) {
//             return res.status(500).json({ error: 'Error uploading file' });
//           }
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array(), error_type: 0, created: false });
//     }

// console.log(files)
        
//           const name = fields.name[0];
//           const price = fields.price[0];
//           const description = fields.description[0]
//           const category = fields.category[0]
//           const image = files.image[0].filepath;
//           console.log({ name, price, description ,category});
//           console.log(image)
//           const foldername = "Radiantwhhispersstoreimages"
//             const cloudinaryUploadResult = await cloudinary.uploader.upload(image, { folder:foldername  });

//             const newProduct = new productsModel({
//                 name,
//                 price,
//                 image: cloudinaryUploadResult.secure_url, 
//                 description,
//                 category
//             });

//           // console.log("newProduct is",newProduct)
//             const findoneProduct = await productsModel.findOne({ name })
//             console.log(findoneProduct)
//             if (findoneProduct) {
//                 return res.json({ message: "Product already exists", error_type: 1, created: false });
//             }

//             newProduct.save().then((prod) => {
//                 const id = prod._id;
//                 res.status(201).json({ prod, created: true, status: 1, message: "Product added" });
//             });
//         } catch (error) {
//             console.error('Error uploading file or saving product:', error);
//             res.status(500).json({ error: 'Error uploading file or saving product', created: false });
//         }
//   })

// }





const DeleteAllProduct=async(req,res)=>{

    try {
        await productsModel.deleteMany({});
        res.status(200).json({ message: 'All documents deleted successfully.' });
    } catch (error) {
        console.error('Error deleting documents:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}









const AllProduct=async(req,res)=>{
    try { const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const products = await productsModel.find({}, null, { skip: offset, limit });

    const totalProductsCount = await productsModel.countDocuments();
    const hasMore = offset + products.length < totalProductsCount;

    res.json({ products: products, hasMore: hasMore });
}
catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
}
   
}




const GetProduct=async(req,res)=>{
const { id } = req.params
const product=await productsModel.findById(id)
if(!product){
    res.json({message:"Product not found", status:0})
    return
}
if(product){
res.json({message:'Product  found' ,product})
}
}

const searchProduct=async(req,res)=>{
    const searchQuery = req.query.search;
    console.log(searchQuery)
  if (!searchQuery) {
    res.status(400).json({ error: 'Missing search query parameter' });
    return;
  }
  try {
    const products = await productsModel.find({
      $or: [
        { name: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } },
      ],
    });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


const category= async (req, res) => {
  try {
    const categoryName = req.params.categoryName;
    const products = await productsModel.find({ category: categoryName });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



module.exports = {
    AllProduct,
    GetProduct,
    AddProduct,
    DeleteAllProduct,
    searchProduct,
    category
  };
  