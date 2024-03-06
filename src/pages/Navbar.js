import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FakeContext } from '../App'

const Navbar = () => {
    const context =useContext(FakeContext)
  return (
    <>
    <div className='nav'>
    <Link className='link' to='/'>Home Icon</Link>
    <br/> <br/>
    <Link  className='link' to='/cart'>Cart {context.cartValue}</Link>
    </div>
    </>
  )
}

export default Navbar