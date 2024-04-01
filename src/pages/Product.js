import React, { useContext, useEffect, useState } from "react";
import { FakeContext } from "../App";

const Product = () => {

  const context = useContext(FakeContext);

  // {data,setdata,cart,setcart,cartValue,setcartValue}

  const [product, setproduct] = useState([]);

  const [searchInp, setsearchInp] = useState("");

  const getPro = () => {
    if(context.data.length > 0){  // 20 > 0
      setproduct(context.data);
    }
  };

  useEffect(() => {
    getPro();
  })

  //  filter , inlcudes , map

  const filterProd = product.filter((x) =>
    x.title.toLowerCase().includes(searchInp.toLowerCase())
  );

  return (
    <>
      <h1>Product Page</h1>
      <div>
      <input
        value={searchInp}
        onChange={(e) => setsearchInp(e.target.value)}
        type="text"
      />
      </div>
      <div>
        {filterProd.map((e,i)=>{
            return(
                <div key={i}>
                <h1>{e.title}</h1>
                <img src={e.image} height={100} width={100}/>
                <p>{e.description}</p>
                {/* <h4>Rating : {e.rating.rate}</h4>
                <h4>Available Count : {e.rating.count}</h4> */}
                <h3>Price : {e.price}</h3>
                <button onClick={()=>{
                    context.cart.push(e);
                    context.setcartValue(context.cart.length)
                }}>Add to Cart</button>
                </div>
            )
        })}
      </div>
    </>
  );
};

export default Product;
