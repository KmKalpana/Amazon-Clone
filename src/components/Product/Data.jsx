import React from 'react'
import { useStateValue } from '../../StateProvide'
import './data.css'
const Data = ({ id, title, image, price, reviews }) => {
  const [{}, dispatch] = useStateValue()
  const Add = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        reviews: reviews
      }
    })
  }
  return (
    <div className='product'>
      <div className='title'>
        <p> {title}</p>
      </div>
      <div className='price'><small>₹</small>
        <strong>{price}</strong>
      </div>
      <div className='review'>{Array(reviews).fill().map((_, index) => <span key={index}>🌟</span>)}
      </div>
      <img className='images' src={image} alt='amazon-logo' />
      <button className='btn' onClick={Add}>Add to Basket</button>
    </div>
  )
}

export default Data
