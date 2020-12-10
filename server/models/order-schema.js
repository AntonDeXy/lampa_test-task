const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  cart: {
    totalSum: Number,
    totalProductsCount: Number,
    items: [{
      count: Number,
      product: {title: String, description: String, price: Number, ImgUrl: String}
    }]
  },
  user: {
    name: String,
    surName: String,
    adress: String,
    phone: String
  }
}, {collection: 'orders'}) 

module.exports = mongoose.model('Order', OrderSchema)