import React,{useEffect} from 'react'
import jwt from 'jsonwebtoken'
import HomeScreen from '../screens/HomeScreen';
import Navbar from './Navbar'


function Cart({props}) {

   async function crtOrd(event){


   }

  return (
    <>   
<Navbar/>
   
    <h2 className='flex-container' >Confirm your order</h2>
    <form className="row g-3" style={{margin:'75px'}}>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label" >pizzaName</label>
    <input type="email" className="form-control" id="inputPizza" />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label" >phone</label>
    <input type="password" className="form-control" id="inputPhone"  />
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">email</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="abcedge@gmail.com" />
  </div>
  <div className="col-12">
    <label for="inputName" className="form-label" >address</label>
    <input type="text" className="form-control" id="inputAddress" />
  </div>
  <div className="col-md-6">
    <label for="inputPhone" className="form-label"  >prices</label>
    <input type="text" className="form-control" id="inputPhone" />
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label" >variants</label>
    <input type="text" className="form-control" id="inputVariants" />
  </div>
 
  <br />
  <a href="http://localhost:3000/Home">change your order</a>
  <div className="col-12">
    <button type="submit" className="btn btn-primary" >Confirm</button>
  </div>
</form>

  </>
   
  );
}

export default Cart;