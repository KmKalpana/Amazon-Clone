import React from 'react'
import './checkout.css'
import image from './image.jpg'
import Amount from './Amount'
import { useStateValue } from '../../StateProvide'
import CheckoutProduct from './CheckoutProduct'
function Checkout () {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className='checkout'>
      <div className='left'>
        <img className='checkout__ad' src={image} alt='ad' />
        {basket?.length === 0
          ? (
            <div> <h1>Your Shopping basket is empty</h1> <p>You have no items in your basket. To buy one or add item to basket click the add to basket button</p></div> ) : (
              <div>
                <h1 className='checkout_title'>Your Shopping Basket</h1>
                {
            basket.map(item => {
              console.log(item)
              return (
                <CheckoutProduct
                id={item.id} 
                title={item.title}
                 image={item.image}
                  price={item.price}
                 reviews={item.reviews} />)
            }
            )
          }
              </div>
            )}
      </div>
      {basket?.length > 0 && <div className='right'>
        <Amount /> </div> }
    </div>
  )
}
export default Checkout
