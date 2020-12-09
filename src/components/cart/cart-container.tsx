import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import Cart from './cart'
import { decreaseProductCount, increaseProductCount, userData, saveDataToLocalStorage } from '../../redux/cart-reducer'
import { cart, product } from '../../types/type'

type CartContainerType = {
  cartState: cart
  decreaseProductCount: (productId: string) => void
  increaseProductCount: (product: product) => void
  saveDataToLocalStorage: (cart: cart, user: userData) => void
}

const CartContainer = ({cartState, decreaseProductCount, saveDataToLocalStorage, increaseProductCount}: CartContainerType) => {
  return (
    <Cart cartState={cartState} saveDataToLocalStorage={(cart: cart, user: userData) => saveDataToLocalStorage(cart, user)} decreaseProductCount={(productId: string) => decreaseProductCount(productId)} increaseProductCount={(product:product) => increaseProductCount(product)} />
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
  saveDataToLocalStorage(cart: cart, user: userData) {
    saveDataToLocalStorage(cart, user)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)