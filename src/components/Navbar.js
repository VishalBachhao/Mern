import React from 'react'

const Navbar = () => {
  return <>

    <div><nav className="navbar navbar-expand-lg bg-primary shadow-lg p-3 mb-5 bg-body-tertiary rounded">

   
    <div className="container-fluid">
      <a className="navbar-brand" href="/Home" >VOOSH pizza <center></center></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ml-auto">
        
        <li className='nav-item text-light-emphasis'> <a className="nav-link" href="/Cart" >Cart</a> </li> 
        <li className='nav-item text-light-emphasis'> <a className="nav-link" href="/Orders" >Orders</a> </li> 
        <li className='nav-item text-light-emphasis'><a className="nav-link "  href="/Login" >Logout</a></li> 
         
        </ul>
      </div>
    </div>
  </nav></div>
  </>
}

export default Navbar