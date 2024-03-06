import React, { useContext, useEffect, useState } from 'react'
import { FakeContext } from '../App'

const Cart = () => {
  const context = useContext(FakeContext)

  const [totalPrice, settotalPrice] = useState(0)

  // [1,2,3,4] = 10

  useEffect(()=>{
    const newPrice = context.cart.reduce((sum, product)=> sum + product.price,0)
    settotalPrice(newPrice)
  },[context.cart])

  const handleClear = (e) =>{
    e.preventDefault()
    context.setcart([])
    context.setcartValue(0)
  }

  const handleClick = (e) =>{
    const indexRemove = context.cart.findIndex((product)=> product === e )
    if(indexRemove !== -1){

      const updateCart = [...context.cart]
      updateCart.splice(indexRemove,1)

      context.setcart(updateCart)
      context.setcartValue(updateCart.length)
    }

  }
  

  return (
    <>
    <button onClick={handleClear}>Clear Cart</button>
    {
      context.cart.length ? 
      <>  
      <h1>You are Ordered</h1>
      {context.cart.map((e,i)=>{
        return(
          <div key={i}>
          <h1>{e.title}</h1>
          <img src={e.image} height={100} width={100}/>
          <h4>Price : {e.price}</h4>
          <button onClick={()=>handleClick(e)}>Remove from Cart</button>
          </div>
        )
      })}
      </> 
      : 
      <>
      <h1>cart Empty</h1>
       </>
    }
    <div>
      <h1>Total Price : {totalPrice}</h1>
    </div>

    </>
  )
}

export default Cart