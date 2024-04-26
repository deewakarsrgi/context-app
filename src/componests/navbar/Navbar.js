import React, { useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { IoStorefrontOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import './Navbar.css'
import {  cartcontext } from '../../context/CartContext';

const Navbar = () => {
  const Globlestate=useContext(cartcontext);
  const state = Globlestate.state;
  const history= useNavigate()
  const handleCart=()=>{
    history("/cart")
  }
  const handleHome =()=>{
    history("/")
  }
  return (
    <nav classname="navbar fixed-top ">
  <div classname="container-fluid bg-bs-tertiary-color ">
    <div className='d-flex justify-content-between bg-warning-subtle'>
   <div><IoStorefrontOutline className='icon' onClick={handleHome}/></div>
   <div onClick={handleCart}><FaCartPlus className='icon' />{state.length}</div>
   </div>
  </div>
</nav>
  )
}

export default Navbar