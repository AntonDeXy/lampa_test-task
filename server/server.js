const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const productsController = require('./controllers/product') 
const ordersController = require('./controllers/order') 

const PORT = process.env.PORT || 5000

const username = 'admin'
const password = 'admintest'
const mongoURI = `mongodb+srv://${username}:${password}@cluster0.fxjql.mongodb.net/test-app?retryWrites=true&w=majority`

const app = express()

app.use(morgan('tiny'))

app.use(express.json())
app.use(cors('http://localhost:3000/'))
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/products', productsController.getAllProducts)

app.post('/products/create', productsController.createProduct)

app.get('/orders', ordersController.getAllOrders)

app.post('/orders/create', ordersController.createOrder)

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    console.log('mongoDB connected')
    app.listen(PORT, '0.0.0.0',() => console.log('server started'))
  },
  err => {console.log(err)}
)

