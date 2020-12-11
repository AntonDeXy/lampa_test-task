import React from 'react'
import { product } from '../../types/type'
import ProductCard from './product-card'

type ProductsListType = {
  products: product[]
  addProductToCart: (product: product) => void
}

const ProductsList:React.FC<ProductsListType> = ({products, addProductToCart}) => {
  return (
    <div className='product-list'>
      {products.map(product => {
        return <ProductCard 
          key={product._id} product={product}
          addProductToCart={() => addProductToCart(product)} />
      })}
    </div>
  )
}

export default ProductsList