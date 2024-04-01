// import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FakeContext } from '../App'
import { useContext } from 'react'

const Navbar = () => {

  const nav = useContext(FakeContext)
  // {data,setdata,cart,setcart,cartValue,setcartValue}
    
  return (
    <>
    <div className='nav'>
    <Link className='link' to='/'>Home Icon</Link>
    <br/> <br/>
    <Link  className='link' to='/cart'>Cart {nav.cartValue}</Link>
    </div>
    </>
  )
}

export default Navbar