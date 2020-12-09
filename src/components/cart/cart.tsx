import React from 'react'
import { cart, product } from '../../types/type'
import { CartStyled } from './cart-styled'
import CartItemsList from './cart-items-list'
import CartOrderForm from './cart-order-form'
import { userData } from '../../redux/cart-reducer'

type CartType = {
  cartState: cart
  decreaseProductCount: (productId: string) => void
  increaseProductCount: (product: product) => void
  saveDataToLocalStorage: (cart: cart, user: userData) => void
}

const Cart = ({cartState, decreaseProductCount, saveDataToLocalStorage, increaseProductCount}: CartType) => {
  const onFormSubmit = (data: any) => {
    saveDataToLocalStorage(cartState, data)
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