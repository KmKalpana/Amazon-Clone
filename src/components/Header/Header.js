import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import './header.css'
import { useStateValue } from '../../StateProvide'
import { auth } from './../Login/firebase'
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue()
  const CheckforAuth = () => {
    if (user) {
      auth.signOut()
    }
  }
  return (
    <div className='header'>
      <Link to='/'>
        <img className='amazon-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon-logo' />
      </Link>
      <p className='in'>.co.uk</p>
      <div className='header-search'>
        <input className='searchinput' type='text' />
        <SearchIcon className='search-icon' />
      </div>
      <div className='header-bar'>
        <div className='header-nav' onClick={CheckforAuth}>
          <Link to={!user && '/login'}>
            <span className='line-one'>hello, Guest</span>
            <br />
            <span className='line-two'><b>{user ? 'Sign Out' : 'Sign In'}</b></span>
          </Link>
        </div>
        <div className='header-nav'>
          <span className='line-one'>Returns</span>
          <span className='line-two'> <b>& Order </b></span>
        </div>
        <Link to='/checkout'>
          <div className='shopping-icon'>
            <ShoppingIcon />
            <span className='count'>{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
