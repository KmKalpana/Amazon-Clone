import React, { useState, useEffect } from 'react'
import './payment.css'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from './../../StateProvide'
import CheckoutProduct from './../Checkout/CheckoutProduct'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { getBasketTotal } from '../../Reducer'
import CurrencyFormat from 'react-currency-format'
import axios from '../../axios'
const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe=useStripe();
  const Navigate=useNavigate();
  const elements=useElements();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(null);
  const [succeedded, setSucceedded]=useState(false)
  const [processing, setProcessing]=useState("");
  const [clientSecret, setClientSecret]=useState(true);
  useEffect(() => {
   const getClientSecret = async () => {
     const response = await axios({
       method: 'post',
       url:`/payments/create?Total=${getBasketTotal(basket)*100}`
           });
       setClientSecret(response.data.clientSecret)

   }
   getClientSecret();
  },[basket])
  const submit = e => {
              e.preventDefault();
              setProcessing(true);
              const payload = stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                  card: elements.getElement(CardElement)
                }
              }).then(({paymentIntent}) => {
                setSucceedded(true);
                setError(null);
                setProcessing(false);
                Navigate('/orders',{replace:true});
              })
              
  }
  const change = e =>{
       setDisable(e.empty);
       setError(e.error ? e.error.message : '');
  }
  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>Checkout (<Link to='/checkout'>{basket?.length} items </Link>)</h1>
        <div className='payment-section'>
          <div className='payment-title'>
            <h2>Delivery Address</h2>
          </div>
          <div className='payment-address'>
            <p>{user?.email}</p>
            <p>T.State BanjaraWala Dehradun</p>
            <p>Uttarakhand, India</p>
           </div>
        </div>
        <div className='payment-section'>
          <div className='payment_title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment-items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                reviews={item.reviews}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment-detail'>
            <form onSubmit={submit}>
            <CardElement onChange={change}/>
              <div className='payment-price'>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                    <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType='text'
                  thousandSeparator={true}
                  prefix='$'
                />
                <button disabled={processing || disable || succeedded}>
                <span>{processing ? <p>Processing</p>:
                "Buy Now"}</span></button>

              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Payment
