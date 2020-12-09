import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import Cart from './cart'
import { clearCart, decreaseProductCount, increaseProductCount } from '../../redux/cart-reducer'
import { cart, product } from '../../types/type'

type CartContainerType = {
  cartState: cart
  clearCart: () => void
  decreaseProductCount: (productId: string) => void
  increaseProductCount: (product: product) => void
}

const CartContainer = ({cartState, clearCart, decreaseProductCount, increaseProductCount}: CartContainerType) => {
  return (
    <Cart cartState={cartState} clearCart={clearCart} decreaseProductCount={(productId: string) => decreaseProductCount(productId)} increaseProductCount={(product:product) => increaseProductCount(product)} />
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)