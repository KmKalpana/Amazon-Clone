import React, { useState } from 'react'
import './createaccount.css'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
const Create = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const Navigate = useNavigate()
  const register = async (event) =>
   {
    event.preventDefault()
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
      if (auth) {
        Navigate('/')
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='register-page'>
      <div>
        <Link to='/'>
          <img className='login-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='amazon-logo' />
        </Link>
      </div>
      <div className='register-containt'>
        <h1>Create Account</h1>
        <form className='Form'>
          <p><strong>Enter Email</strong></p>
          <input className='input' type='text' value={email} onChange={e => setEmail(e.target.value)} />
          <p><strong>Password</strong></p>
          <input className='input1' type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <p style={{ fontSize: '10px' }}><strong>Passwords must be at least 6 characters.</strong></p>
          <p><strong>Re-Enter Password</strong>
          </p>
          <input className='input' type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button className='btn' type='submit' onClick={register}>Continue</button>
          <p style={{ fontSize: '12px' }}>By creating an account you agree to Amazon's FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
          <p>Already hava an account ? <Link to='/Login'><button className='login-btn' onClick={Login}>Sign in</button></Link></p>
        </form>
      </div>
    </div>
  )
}
export default Create
