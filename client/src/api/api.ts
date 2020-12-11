import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { order, product } from '../types/type'
import axios from 'axios'

const { REACT_APP_EXPRESS_SERVER, REACT_APP_BASE_API_URL } = process.env

const baseExpressServerUrl = REACT_APP_BASE_API_URL || 'http://localhost:5000/'

const firebaseConfig = {
  apiKey: "AIzaSyDH84c5IozQZ0tLjthUL7-D7WPHIIgGnT4",
  authDomain: "lampalampa-test-task.firebaseapp.com",
  databaseURL: "https://lampalampa-test-task-default-rtdb.firebaseio.com",
  projectId: "lampalampa-test-task",
  storageBucket: "lampalampa-test-task.appspot.com",
  messagingSenderId: "442995251510",
  appId: "1:442995251510:web:1e8165b3484a3c98813b97",
  measurementId: "G-GTZQ2ZKZ3Z"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const firestore = firebase.firestore()

const productsRef = firestore.collection('products')
const ordersRef = firestore.collection('orders')

const API = {
  async getProducts() {
    const snapshot = await productsRef.get()
    const data: product[] = []
    snapshot.forEach((doc: any) => data.push({ ...doc.data(), _id: doc.id }))
    return data
  },
  createNewOrder(order: order) {
    ordersRef.add(order)
  }
}

const APIWithExpress = {
  async getProducts() {
    const { data } = await axios.get(`${baseExpressServerUrl}products`)
    return data
  },
  async createNewOrder(order: order) {
    try {
      const res = await axios.post(`${baseExpressServerUrl}orders/create`, { order }, {timeout: 5000})
      console.log(res.status)
      if (res.status === 200) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
}

export default REACT_APP_EXPRESS_SERVER ? APIWithExpress : API