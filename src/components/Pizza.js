import React, { useState } from "react";
import pizzas from "../pizzadata";
import Cart from "../components/Cart"

const Pizza = ({ pizza }) => {
  const [quantity, setquantity] = useState(1);
  const [variant, setvariant] = useState("small");

const ordrDetail={
  quantity,variant,price:(pizza.prices[0][variant] * quantity)} 


async function cartPage(){
 
  const result = await fetch("http://localhost:5000/add-order",{
        method:'POST',
        body:JSON.stringify(
            {variants:ordrDetail.variant,prices:ordrDetail.price}
        ),
        headers:{
            'Content-Type':'application/json',
            'x-api-key': localStorage.token
         }},
  ) 
  let res = await result.json() 
  console.log(res)
  if(res.status=true){
alert('order placed')
  }else{alert('try again')}
 
}


  return (
    <div
      style={{ margin: "75px" }}
      className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
    >
      <h3>{pizza.name}</h3>
      <img
        src={pizza.image}
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      ></img>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>varients</p>
          <select
            className="form-control"
            value={variant}
            onChange={(e) => {
              setvariant(e.target.value);
            }}
          >
            {pizza.variants.map((variant) => {
              return <option value={variant}>{variant}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 py-1">
   
    <h4>Price:{(pizza.prices[0][variant] * quantity)}</h4>
        </div>
        <div className="m-1 w-100 px-5">
          <button className="btn" onClick={cartPage}>Add to cart</button>
        </div>
      </div>
    </div>
  );


};

export default Pizza;
