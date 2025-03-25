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

router.post('/' , async(req,res) => {
    try {
        const {name , price , description , category , image , location , userName } = req.body;
        const newProduct = new Product({name , price , description , category , image , location , userName})

        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

module.exports = router;