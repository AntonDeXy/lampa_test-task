const ProductSchema = require('../models/product-schema')

exports.getAllProducts = async (req, res) => {
  try {
    const data = await ProductSchema.find({})
    res.status(200).send(data)
  } catch (err) {
    throw err
  }
}

exports.createProduct = async (req, res) => {
  try {
    const newProduct = new ProductSchema({...req.body.product})
    res.status(200).send(await newProduct.save()) 
  } catch (err) {
    throw err
  }
}