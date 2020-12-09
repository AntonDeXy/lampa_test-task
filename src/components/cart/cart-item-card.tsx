import React from 'react'
import { cartItem } from '../../types/type'
import { CartItemCardStyled } from './cart-styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

type CartItemCardType = {
  item: cartItem
  decreaseProductCount: () => void
  increaseProductCount: () => void
}

const CartItemCard = ({item, decreaseProductCount, increaseProductCount}: CartItemCardType) => {
  return (
    <CartItemCardStyled>
      <div className="img">
        <img src={item.product.imgUrl} alt={item.product.title}/>
      </div>
      <div className="info">
        <div className='title'><h2>{item.product.title}</h2></div>
        <div className='price'><span>{item.product.price}&#36;</span></div>
        <div className='desc' ><span>{item.product.description}</span></div>
      </div>
      <div className="quantity">
        <div onClick={decreaseProductCount} className="button minus">
          <FontAwesomeIcon color='#000' icon={faMinus} />
        </div>
        <span>
          {item.count}
        </span>
        <div onClick={increaseProductCount} className="button plus">
          <FontAwesomeIcon color='#000' icon={faPlus} />
        </div>
      </div>
    </CartItemCardStyled>
  )
}

export default CartItemCard