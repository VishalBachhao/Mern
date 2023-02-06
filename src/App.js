import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import Signup from './components/Signup'
import Orders from './components/Orders'


function App() {
 
  return <Router>
    
    <Routes>

      <Route path='/Home' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Orders' element={<Orders/>}/>
    </Routes>
    
  </Router>
   
  
}

export default App;

















