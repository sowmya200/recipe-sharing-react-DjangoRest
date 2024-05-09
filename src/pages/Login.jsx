import React from "react";
import logo from "../assets/foodlogo.png";

const Login = () => {
  return (
    <div className="bg-[#4D989D] w-full text-white flex justify-between items-center px-4 py-2 mt-4 ml-4"> {/* Added margin top (mt-4) and left (ml-4) */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-6 h-6 object-contain" /> {/* Reduced logo size to w-6 h-6 */}
        
      </div>
      <div>
    </div>
       
      
    </div>
  );
};

export default Login;
