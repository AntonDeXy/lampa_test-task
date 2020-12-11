import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import Cart from './cart'
import { 
  clearCart, 
  createNewOrder, 
  decreaseProductCount, 
  increaseProductCount 
} from '../../redux/cart-reducer'
import { cart, product, userData } from '../../types/type'

type CartContainerType = {
  cartState: cart
  clearCart: () => void
  decreaseProductCount: (productId: string) => void
  increaseProductCount: (product: product) => void
  createNewOrder: (cart: cart, user: userData, cb: () => void, failed: () => void) => void
}

const CartContainer: React.FC<CartContainerType> = (
  { cartState, createNewOrder, clearCart, decreaseProductCount, increaseProductCount }
) => {
  return (
    <Cart
      createNewOrder={
        (cart: cart, user: userData, cb: () => void, failed: () => void) => createNewOrder(cart, user, cb, failed)
      }
      decreaseProductCount={(productId: string) => decreaseProductCount(productId)}
      increaseProductCount={(product: product) => increaseProductCount(product)}
      cartState={cartState} clearCart={clearCart} />
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
  createNewOrder(cart: cart, user: userData, cb: () => void, failed: () => void) {
    dispatch(createNewOrder(cart, user, cb, failed))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)