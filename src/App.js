import React, { createContext, useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Navbar from './pages/Navbar'
import axios from 'axios'
import Home from './pages/Home'
const url = "https://fakestoreapi.com/products"

export const FakeContext = createContext()

// useContext - create , provide , useContext


const App = () => {

  const [data, setdata] = useState([])
  const [cart, setcart] = useState([])
  const [cartValue, setcartValue] = useState(0)

  useEffect(()=>{
    getData()
  })

  const getData = async () =>{
    const response = await axios.get(url)
    setdata(response.data)
  }


  return (
    <>
    <Router>
      <FakeContext.Provider value={{data,setdata,cart,setcart,cartValue,setcartValue}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </FakeContext.Provider>
    </Router>
    </>
  )
}

export default App
