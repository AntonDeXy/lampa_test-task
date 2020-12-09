import React from 'react'
import { product } from '../../types/type'
import ProductCardStyled from './product-card-styled'

type ProductCardType = {
  product: product
  addProductToCart: () => void
}

const ProductCard = ({product, addProductToCart}: ProductCardType) => {
  return (
    <ProductCardStyled>
      <div className="img">
        <img src={product.imgUrl} alt={product.title}/>
      </div>
      <div className="info">
        <h2>{product.title}</h2>
        <div className='description'>
          <span>{product.description.length > 50 ? (product.description.split('', 100).join('') + '...') : product.description }</span>
        </div>
        <div className='price' >
          <span>{product.price}&#36;</span>
        </div>
        <div className='addToCart' >
          <button onClick={addProductToCart}>Add to cart</button>
        </div>
      </div>
    </ProductCardStyled>
  )
}

export default ProductCard