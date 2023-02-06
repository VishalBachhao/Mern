import React,{useEffect, useState} from 'react'
import jwt from 'jsonwebtoken'
import HomeScreen from '../screens/HomeScreen';
import Navbar from './Navbar'


function Orders() {
const [details,setDetails]=useState([])
  
useEffect(() => {
    async function getData(){
        const res = await fetch('http://localhost:5000/get-order',{
            method:'GET'
        })
        const data=await res.json()
       
   if(data){
    window.location.href='http://localhost:5000/get-order'
   }
      }

 getData()
}, [])

  return( 
    <>   
<Navbar/>



    </>
  ) 
}

export default Orders;
