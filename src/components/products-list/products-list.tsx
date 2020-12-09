import React from 'react'
import { product } from '../../types/type'
import { ProductsListStyled } from './products-list-styled'
import ProductCard from './product-card'

type ProductsListType = {
  products: product[]
  addProductToCart: (product: product) => void
}

const ProductsList = ({products, addProductToCart}: ProductsListType) => {
  return (
    <ProductsListStyled>
      {products.map(product => {
        return <ProductCard addProductToCart={() => addProductToCart(product)} product={product} />
      })}
    </ProductsListStyled>
  )
}

export default ProductsList