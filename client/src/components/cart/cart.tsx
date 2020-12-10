import React from 'react'
import { cart, product, userData } from '../../types/type'
import { CartStyled } from './cart-styled'
import CartItemsList from './cart-items-list'
import CartOrderForm from './cart-order-form'
import { useAlert } from 'react-alert'

type CartType = {
  cartState: cart
  decreaseProductCount: (productId: string) => void
  increaseProductCount: (product: product) => void
  clearCart: () => void
  createNewOrder: (cart: cart, user: userData, cb: () => void, failed: () => void) => void
}

const Cart = ({cartState, clearCart, createNewOrder, decreaseProductCount, increaseProductCount}: CartType) => {
  const alert = useAlert()

  const onFormSubmit = (user: any) => {
    createNewOrder(cartState, user, () => clearCart(), () => alert.error('Something went wrong, try again later'))
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