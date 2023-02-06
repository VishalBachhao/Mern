import React,{useEffect} from 'react'
import jwt from 'jsonwebtoken'
import HomeScreen from '../screens/HomeScreen';
import Navbar from './Navbar'


function Home() {


    useEffect(()=>{
        const token = localStorage.getItem('token')
        console.log(token)
       
        if(token){
            const user=jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                window.location.href='/Login'
            }              
        }
       }
     )

  return (
    <>   
<Navbar/>
<HomeScreen/>
    </>
  );
}

export default Home;