import API from "../components/api/api"
import { product } from "../types/type"

const SET_PRODUCTS = 'SET_PRODUCTS'

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
  // const data = [
  //   {
  //     _id: '1',
  //     title: 'title1',
  //     description: 'description1',
  //     price: 9.99,
  //     imgUrl: 'https://media.dominos.ua/news/news_image/2020/04/08/new-pizzas_news.jpg'
  //   },
  //   {
  //     _id: '2',
  //     title: 'title2',
  //     description: 'description2',
  //     price: 19.99,
  //     imgUrl: 'https://media.dominos.ua/news/news_image/2020/04/08/new-pizzas_news.jpg'
  //   },
  // ]
  // dispath(setProducts(data))
  dispath(setProducts(await API.getProducts()))
}

export default productsReducer