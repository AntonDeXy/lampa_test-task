const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

const productsController = require('./controllers/product') 
const ordersController = require('./controllers/order') 

const username = 'admin'
const password = 'admintest'
const mongoURI = `mongodb+srv://${username}:${password}@cluster0.fxjql.mongodb.net/test-app?retryWrites=true&w=majority`

const app = express()

app.use(morgan('tiny'))

app.use(express.json())
app.use(cors('http://localhost:3000/'))

app.get('/products', productsController.getAllProducts)

app.post('/products/create', productsController.createProduct)

app.get('/orders', ordersController.getAllOrders)

app.post('/orders/create', ordersController.createOrder)

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(5000, () => console.log('server started'))
