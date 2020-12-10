import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import Cart from './cart'
import { clearCart, createNewOrder, decreaseProductCount, increaseProductCount } from '../../redux/cart-reducer'
import { cart, product, userData } from '../../types/type'

type CartContainerType = {
  cartState: cart
  clearCart: () => void
  decreaseProductCount: (productId: string) => void
  increaseProductCount: (product: product) => void
  createNewOrder: (cart: cart, user: userData) => void
}

const CartContainer = ({cartState, createNewOrder, clearCart, decreaseProductCount, increaseProductCount}: CartContainerType) => {
  return (
    <Cart createNewOrder={(cart: cart, user: userData) => createNewOrder(cart, user)} cartState={cartState} clearCart={clearCart} decreaseProductCount={(productId: string) => decreaseProductCount(productId)} increaseProductCount={(product:product) => increaseProductCount(product)} />
  )
}

const mapStateToProps = (state: AppStateType) => ({
  cartState: state.cartReducer
})

const mapDispatchToProps = (dispatch: any) => ({
  decreaseProductCount(productId: string) {
    dispatch(decreaseProductCount(productId))
  },
  increaseProductCount(product: product) {
    dispatch(increaseProductCount(product))
  },
  clearCart() {
    dispatch(clearCart())
  },
  createNewOrder(cart: cart, user: userData) {
    dispatch(createNewOrder(cart, user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)