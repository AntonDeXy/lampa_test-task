import React, { useEffect, useState } from 'react'
import ProductsList from './products-list'
import {connect} from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { product } from '../../types/type'
import { getProducts } from '../../redux/products-reducer'
import { increaseProductCount } from '../../redux/cart-reducer'
import { ProductsListStyled } from './products-list-styled'

type ProductsListContainerType = {
  productsState: product[]
  getProducts: () => void
  addProductToCart: (product: product) => void
}

const ProductsListContainer = ({productsState, getProducts, addProductToCart}: ProductsListContainerType) => {
  const [products, setProducts] = useState(productsState)
  
  useEffect(() => {
    setProducts(productsState)
  }, [productsState])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <ProductsListStyled>
      <ProductsList addProductToCart={addProductToCart} products={products} />
    </ProductsListStyled>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  productsState: state.productsReducer.products
})

const mapDispatchToProps = (dispatch: any) => ({
  getProducts() {
    dispatch(getProducts())
  },
  addProductToCart(product: product) {
    dispatch(increaseProductCount(product))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer)