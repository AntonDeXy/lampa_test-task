const ProductSchema = require('../models/product-schema')

exports.getAllProducts = async (req, res) => {
  try {
    const data = await ProductSchema.find({})
    res.send(data).status(200)
  } catch (err) {
    res.send('Server error').status(500)
    throw err
  }
}

exports.createProduct = async (req, res) => {
  try {
    const newProduct = new ProductSchema({...req.body.product})
    res.send(await newProduct.save()).status(201)
  } catch (err) {
    res.send('Server error').status(500)
    throw err
  }
}