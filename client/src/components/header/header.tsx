import React, { useEffect } from 'react'
import { HeaderStyled } from './header-styled'
import { NavLink } from 'react-router-dom'

type HeaderType = {
  cartPrice: Number
  getCartDataFromLocalStorage: () => void
}

const Header:React.FC<HeaderType> = ({cartPrice, getCartDataFromLocalStorage}) => {
  useEffect(() => {
    getCartDataFromLocalStorage()
  }, [getCartDataFromLocalStorage])

  return (
    <HeaderStyled>
      <div className="wrapper">
        <NavLink to='/'>MarketName</NavLink>
        <div>
          {cartPrice > 0 && (
            <span>{cartPrice.toFixed(2)}&#36;</span>
          )}
          <NavLink to='/cart'>Cart</NavLink>
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header