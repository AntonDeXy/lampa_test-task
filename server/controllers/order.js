const OrderSchema = require('../models/order-schema')

exports.getAllOrders = async (req, res) => {
  try {
    const data = await OrderSchema.find({})
    res.status(200).send(data)
  } catch (err) {
    throw err
  }
}

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new OrderSchema({...req.body.order})
    res.status(200).send(await newOrder.save())
  } catch (err) {
    throw err
  }
}

exports.createOrder