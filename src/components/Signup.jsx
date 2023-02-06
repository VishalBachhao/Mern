import React,{useState} from 'react'

import Header from './Header'
import {useHistory} from 'react-router-dom'

const Signup = () => {
 
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[name,setName]=useState('')
const[phone,setPhone]=useState('')
const[address,setAddress]=useState('')
const[state,setState]=useState('')
const[zip,setZip]=useState('')

async function crtUsr(event){

    try{

        event.preventDefault()
        const result = await fetch("http://localhost:5000/add-user",{
            method:'POST',
            body:JSON.stringify(
                {email,password,name,phone,address,state,zip}
            ),
            headers:{
                'Content-Type':'application/json',
             },
        })
    
        const data=await result.json()
      
        console.log(data)
        if(data.status==true){
            alert('user created')
            window.location.href='http://localhost:3000/Login'
        }else{
            alert(data.message)
        }

    }catch(err){
        alert(err.message)
    }
   

}

    return <>
    <Header/>
    <h2 className='flex-container' >Sign up</h2>
    <form className="row g-3" style={{margin:'75px'}}>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={address} onChange={(e)=>setAddress(e.target.value)}/>
  </div>
  <div className="col-12">
    <label for="inputName" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputName" placeholder="Robert" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label for="inputPhone" className="form-label">Phone</label>
    <input type="text" className="form-control" id="inputPhone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <input type="text" className="form-control" id="inputState" value={state} onChange={(e)=>setState(e.target.value)}/>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" value={zip} onChange={(e)=>setZip(e.target.value)}/>
  </div>
  <div className="col-12">
   
  </div>
  <br />
  <a href="http://localhost:3000/Login">Already a user?</a>
  <div className="col-12">
    <button type="submit" className="btn btn-primary" value={crtUsr} onClick={crtUsr}>Sign up</button>
  </div>
</form>

  </>
  
}

export default Signup