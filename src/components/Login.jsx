import React,{useState} from 'react'

import Header from './Header'
import {useHistory} from 'react-router-dom'

const Login = () => {
 
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')



async function logUsr(event){
    event.preventDefault()
    const result = await fetch("http://localhost:5000/login-user",{
        method:'POST',
        body:JSON.stringify(
            {email,password}
        ),
        headers:{
            'Content-Type':'application/json',
             
         },
    })


    const data=await result.json()
    console.log(data.user)

    if(data.user){
        alert('successfull')
       
        localStorage.setItem('token',data.user.token) 
       window.location.href='/Home'
   
    
    }else{alert('invalid user')}

}

    return <>
    <Header/>
    <h2 className='flex-container' >Log in</h2>
    <form className="row g-3" style={{margin:'75px'}}>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
  <br />
  <a href="http://localhost:3000/Signup">New user?</a>
 
  <div className="col-12">
    <button type="submit" className="btn btn-primary" value={logUsr} onClick={logUsr}>Log in</button>
  </div>
</form>

  </>
  
}

export default Login