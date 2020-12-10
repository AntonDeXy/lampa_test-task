const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imgUrl: String
}, {collection: 'products'}) 

module.exports = mongoose.model('Product', ProductSchema)