import React from 'react'
import { product } from '../../types/type'
import ProductCard from './product-card'

type ProductsListType = {
  products: product[]
  addProductToCart: (product: product) => void
}

const ProductsList = ({products, addProductToCart}: ProductsListType) => {
  return (
    <div className='product-list'>
      {products.map(product => {
        return <ProductCard key={product._id} addProductToCart={() => addProductToCart(product)} product={product} />
      })}
    </div>
  )
}

export default ProductsList