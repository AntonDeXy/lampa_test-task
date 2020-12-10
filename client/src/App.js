import React from 'react'
import './App.css'
import HeaderContainer from './components/header/header-container'
import { Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import ProductsListContainer from './components/products-list/products-list-container'
import CartContainer from './components/cart/cart-container'

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Route path="/" exact>
        <ProductsListContainer />
      </Route>
      <Route path="/cart" exact>
        <CartContainer />
      </Route>
    </div>
  )
}

export default compose(withRouter)(App)
