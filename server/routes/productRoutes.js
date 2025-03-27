const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.get('/' , async(req,res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        console.log(error , 'error in routes')
        res.status(500).json({message:error.message})
    }
})
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"), 
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname) 
});

const upload = multer({ dest: "uploads/" }); 

router.post("/", upload.single("image"), async (req, res) => {
    console.log('reached server')
    try {
        const { name, description, price, category, location, userName } = req.body;
        const imagePath = req.file ? req.file.path : "";
        
        console.log("Received data:", req.body); // Debugging line
        console.log("File path:", imagePath); // Debugging line


        const newProduct = new Product({ name, description, price, category, location, userName, image: imagePath });
        await newProduct.save();
        res.status(201).json({ success: true, product: newProduct });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ success: false, error: "Failed to add product" });
    }
});

module.exports = router;