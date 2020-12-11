import React from 'react'
import { connect } from 'react-redux'
import { getCartDataFromLocalStorage } from '../../redux/cart-reducer'
import { AppStateType } from '../../redux/redux-store'
import Header from './header'

type HeaderContainerType = {
  cartPrice: Number
  getCartDataFromLocalStorage: () => void
}

const HeaderContainer:React.FC<HeaderContainerType> = (
  {cartPrice, getCartDataFromLocalStorage}
) => {
  return (
    <Header getCartDataFromLocalStorage={getCartDataFromLocalStorage} cartPrice={cartPrice} />
  )
}

const mapStateToProps = (state: AppStateType) => ({
  cartPrice: state.cartReducer.totalSum
})

const mapDispatchToProps = (dispatch: any) => ({
  getCartDataFromLocalStorage() {
    dispatch(getCartDataFromLocalStorage())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)