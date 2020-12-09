import { cart, product } from '../types/type'

const SET_CART = 'SET_CART'
const INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT'
const DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT'

const initialState: cart = {
  _id: '1',
  totalProductsCount: 0,
  totalSum: 0,
  items: []
}

export type InitialStateType = typeof initialState

const cartReducer = (state = initialState, action: any): InitialStateType => {
  switch(action.type) {
    case SET_CART: {
      return action.cart
    }
    case INCREASE_PRODUCT_COUNT: {
      const newProduct:product = action.product
      const count:number = action.count || 1
      let newState = {}
      const isProductExist = state.items.find(item => item.product._id === newProduct._id)

      if (isProductExist) {
        // if product exists => increase count
        const newProductsState = state.items.map(item => {
          if (item.product._id === newProduct._id) {
            item.count += count
          }
          return item
        })
        newState = {...state, items: newProductsState}
      } else {
        // if product does not exist => create new
        newState = {...state, items: [...state.items, {product: newProduct, count: count}]}
      }

      const cartData = reacountCartPriceAndProductsCount(newState)
      saveDataToLocalStorage({...newState, ...cartData})
      return {...newState, ...cartData}
    }
    case DECREASE_PRODUCT_COUNT: {
      const newProductsState = [...state.items]
      const productId:string = action.productId
      let newItems = {}

      const foundProductId = state.items.findIndex(item => item.product._id === productId)
      if (newProductsState[foundProductId].count > 1) {
        newProductsState[foundProductId].count--
        newItems = newProductsState
      } else {
        newProductsState.splice(foundProductId, 1)
        newItems = newProductsState
      }

      const cartData = reacountCartPriceAndProductsCount({items: newItems})
      saveDataToLocalStorage({...state, items: newItems, ...cartData})
      return {...state, items: newItems, ...cartData}
    }
    default: {
      return state
    }
  }
}

const reacountCartPriceAndProductsCount = (cartItems: any) => {
  const total = cartItems.items.reduce((total: {totalSum: number, totalProductsCount: number}, product: {count: number, product: product}) => {
    return {
      totalProductsCount: total.totalProductsCount += +product.count,
      totalSum: total.totalSum += +product.count * +product.product.price
    }
  }, {totalSum: 0, totalProductsCount: 0})

  return {...total}
}

type increaseProductCountType = {
  type: typeof INCREASE_PRODUCT_COUNT
  product: product
}

export const increaseProductCount = (product: product):increaseProductCountType => ({type: INCREASE_PRODUCT_COUNT, product})

type decreaseProductCountType = {
  type: typeof DECREASE_PRODUCT_COUNT
  productId: string
}

export const decreaseProductCount = (productId: string):decreaseProductCountType => ({type: DECREASE_PRODUCT_COUNT, productId})

type changeCartDataType = {
  type: typeof SET_CART
  cart: cart
}

export const changeCartData = (cart: cart):changeCartDataType => ({type: SET_CART, cart})

export type userData = {
  name: string
  surName: string
  adress: string
  phone: string
}

export const saveDataToLocalStorage = (cart: cart, user?:userData) => {
  localStorage.setItem('cart', JSON.stringify(cart))
  user && localStorage.setItem('user', JSON.stringify(user))
}

export const getCartDataFromLocalStorage = () => (dispatch: any) => {
  const cartData = localStorage.getItem('cart')

  if (cartData) {
    dispatch(changeCartData(JSON.parse(cartData)))
  }
}

export default cartReducer