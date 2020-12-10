import React from 'react'
import { cartItem } from '../../types/type'
import { CartItemStyled } from './cart-styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

type CartItemType = {
  item: cartItem
  decreaseProductCount: () => void
  increaseProductCount: () => void
}

const CartItem = ({item, decreaseProductCount, increaseProductCount}: CartItemType) => {
  return (
    <CartItemStyled>
      <img src={item.product.imgUrl} alt={item.product.title}/>
      <div className="info">
        <div className='title'><h2>{item.product.title}</h2></div>
        <div className='price'><span>{item.product.price}&#36;</span></div>
        <div className='desc'>
          <span>{item.product.description.length > 100 ? (item.product.description.split('', 100).join('') + '...') : item.product.description }</span>
        </div>
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
    </CartItemStyled>
  )
}

export default CartItem