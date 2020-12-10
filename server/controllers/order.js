const OrderSchema = require('../models/order-schema')

exports.getAllOrders = async (req, res) => {
  try {
    const data = await OrderSchema.find({})
    res.send(data).status(200)
  } catch (err) {
    res.send('Server error').status(500)
    throw err
  }
}

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new OrderSchema({...req.body.order})
    res.send(await newOrder.save()).status(200)
  } catch (err) {
    res.send('Server error').status(500)
    throw err
  }
}

exports.createOrder