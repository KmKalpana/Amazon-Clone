import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import CreateAccount from './createaccount'
// Importing toastify module
// import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// toast.configure()
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [error, setError] = useState('')
  const Navigate = useNavigate()
  const signIn = async (event) => {
    event.preventDefault()
    if (email === '' || password === '') {
      console.log('Fields are required')
      return
    }
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log(user)
      if (auth) {
        Navigate('/')
      }
    } catch (error) {
      console.log(error.message)
      //  toast('Unsucessfully')
    }
  }
  return (
    <div className='login'>
      <div>
        <Link to='/'>
          <img className='login-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='amazon-logo' />
        </Link>
      </div>
      <div className='login-containt'>
        <h1>Sign In</h1>
        <form className='Form'>
          <h4>Email or mobile phone number</h4>
          <input className='input' type='text' value={email} onChange={e => setEmail(e.target.value)} />
          <h4>Password</h4>
          <input className='input' type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button className='btn' type='submit' onClick={signIn}> Sign In </button>
          <p className='text'>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>

        </form>
      </div>
      <h6>New to Amazon?</h6>
      <Link to='/register'>
        <button className='create-btn' onClick={CreateAccount}>Create your Amazon Account</button>
      </Link>
    </div>
  )
}
export default Login
