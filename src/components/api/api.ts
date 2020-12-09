import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { product } from '../../types/type'

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

const API = {
  async getProducts() {
    const snapshot = await productsRef.get()
    const data:product[] = []
    snapshot.forEach((doc: any) => data.push({...doc.data(), _id: doc.id}))
    return data
  }
}

export default API