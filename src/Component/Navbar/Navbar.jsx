
import React from "react";
import logo from '../../assests/imgs/logo.jpg';
export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light   ">
  <div className="container-fluid">
   <div className='d-flex justify-content-center align-items-center m-auto'>
   <img className='rounded rounded-circle me-2' style={{width: "70px" , height:"70px"}} src={logo} alt="" />
   <h5 className='lead fw-bold text-dark mb-0'>Elevate Task</h5>
   </div>
   </div>
</nav>
  </>

  
}
