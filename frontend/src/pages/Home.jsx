import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/foodlogo.png";
import hpage from "../assets/homepage1.png";

export default function Home() {
  return (
    <div>
            <div className=" w-full text-white flex  items-center mt-12" style={{ zIndex: 10, position: 'relative' }}>
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-60 h-29 object-contain ml-14" />

                </div>
                <div className="ml-auto mr-14" >
                    <Link to="/signup" className="bg-gray-100 text-black hover:bg-[#979996] text-sm font-bold py-3 px-6 rounded mr-4">Sign Up</Link>
                    <Link to="/login" className="bg-[#608D4B] text-white hover:bg-[#43712E] text-sm font-bold py-3 px-6 rounded">Login</Link>
                </div>
                
            </div>
            <div className="flex  ">
                <p className='text-7xl font-bold mt-32 ml-16'>Your Daily Dish</p>
                
               
                
            </div>
            <div className="flex  ">
                <p className='text-7xl font-bold  mt-2 ml-16'>A <span style={{ color: "#608D4B" }}>Food</span> Journey</p>
                
               
                
            </div>
            <div className="flex" style={{ zIndex: 15, position: 'relative' }}>
                    <img src={hpage} alt="Logo" className="w-60 h-29 w-[15%]  mt-auto ml-[1290px]" />

                </div>
            <div className="water-flow"></div>
    </div>

 
  );
}
