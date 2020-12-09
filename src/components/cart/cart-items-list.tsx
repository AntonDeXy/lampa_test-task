import React from 'react'
import { cartItem, product } from '../../types/type'
import { CartItemsListStyled } from './cart-styled'
import CartItemCard from './cart-item-card';

type CartItemsListType = {
  cartPrice: Number
  items: cartItem[]
  decreaseProductCount: (productId: string) => void
  increaseProductCount: (product: product) => void
}

const CartItemsList = ({items, cartPrice, increaseProductCount, decreaseProductCount}: CartItemsListType) => {
  return (
    <CartItemsListStyled>
      {
        items.map(item => {
          return (
            <CartItemCard 
            decreaseProductCount={() => decreaseProductCount(item.product._id)}
            increaseProductCount={() => increaseProductCount(item.product)} item={item} />
          )
        })
      }
      {cartPrice > 0 && (
        <span className='total-cart-price'>total: {cartPrice.toFixed(2)}&#36;</span>
      )}
    </CartItemsListStyled>
  )
}

export default CartItemsList