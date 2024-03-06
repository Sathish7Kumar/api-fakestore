import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Go to Product Page</h1>
    <Link to='/products'>Products</Link>
    </>
  )
}

export default Home