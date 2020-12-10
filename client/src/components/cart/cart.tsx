import React from 'react'
import { cart, product, userData } from '../../types/type'
import { CartStyled } from './cart-styled'
import CartItemsList from './cart-items-list'
import CartOrderForm from './cart-order-form'

type CartType = {
  cartState: cart
  decreaseProductCount: (productId: string) => void
  increaseProductCount: (product: product) => void
  clearCart: () => void
  createNewOrder: (cart: cart, user: userData) => void
}

const Cart = ({cartState, clearCart, createNewOrder, decreaseProductCount, increaseProductCount}: CartType) => {
  const onFormSubmit = (e: any) => {
    clearCart()
    createNewOrder(cartState, e)
  }
  
  return (
    <CartStyled>
      <CartItemsList 
        cartPrice={cartState.totalSum}
        decreaseProductCount={(productId: string) => decreaseProductCount(productId)} 
        increaseProductCount={(product: product) => increaseProductCount(product)} 
        items={cartState.items} />
      {
        cartState.items.length > 0 && (
          <CartOrderForm 
            onSubmit={onFormSubmit}
          />
        )
      }
    </CartStyled>
  )
}

export default Cart