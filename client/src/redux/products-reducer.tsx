import API from "../api/api"
import { product } from "../types/type"
import { SET_PRODUCTS } from "./types"

const initialState: {products: product[]} = {
  products: []
}

export type InitialStateType = typeof initialState

const productsReducer = (state = initialState, action: any): InitialStateType => {
  switch(action.type) {
    case SET_PRODUCTS: {
      return {...state, products: action.products}
    }
    default: {
      return state
    }
  }
}

type setProductsType = {
  type: typeof SET_PRODUCTS
  products: product[]
}

const setProducts = (products: product[]):setProductsType  => ({type: SET_PRODUCTS, products})

export const getProducts = () => async (dispath: any) => {
  dispath(setProducts(await API.getProducts()))
}

export default productsReducer