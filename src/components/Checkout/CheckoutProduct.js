import React from 'react'
import './checkoutProduct.css'
import { useStateValue } from '../../StateProvide'
function CheckoutProduct ({ id, image, title, price, reviews }) {
  const [{}, dispatch] = useStateValue()
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id
    })
  }
  return (
    <div className='checkoutProduct'>
      <img src={image} className='checkoutProduct__image' alt=' ' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>{Array(reviews).fill().map((_, index) => <span key={index}>🌟</span>)}
        </div>
        <button className="remove" onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}
export default CheckoutProduct
