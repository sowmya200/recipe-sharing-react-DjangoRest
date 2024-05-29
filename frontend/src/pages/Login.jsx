// import React from "react";
// import { Link } from 'react-router-dom';
// import logo from "../assets/foodlogo.png";
// import login from "../assets/frontpage2.png";

// const Signup = () => {
//     return (
//         <div>
//             <div className=" w-full text-white flex  items-center mt-12">
//                 <div className="flex items-center">
//                 <a href="/">
//                   <img src={logo} alt="Logo" className="w-60 h-29 object-contain ml-14" />
//                 </a>
//                 </div>
//                 <div className="ml-auto mr-14">
//                     <Link to="/signup" className="bg-gray-100 text-black hover:bg-[#979996] text-sm font-bold py-3 px-6 rounded mr-4">Sign Up</Link>
//                     <button className="bg-[#608D4B] text-white hover:bg-[#43712E] text-sm font-bold py-3 px-6 rounded">Login</button>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto mt-24 bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                 <div className="flex justify-center">
//                     {/* Left Section (Image) */}
//                     <div className="w-1/2 mr-2">
//                         <img src={login} alt="Image" className="w-full" />
//                     </div>

//                     {/* Right Section (Form) */}
//                     <div className="w-1/2 ml-2">
//                         <p className="text-gray-700 text-center text-2xl font-bold ml-8 mb-4 mt-52">Login </p>
//                         <form >

//                             <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="email">Email</label>
//                                 <input className="shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="password">Password</label>
//                                 <input className="shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
//                             </div>

//                             <div className="flex items-center justify-between">
//                                 <button className="bg-[#608D4B] hover:bg-[#43712E] text-white ml-2 font-semibold mt-4 py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
//                                     Login
//                                 </button>
//                             </div>

//                         </form>

//                         <div className="flex mt-6">
//                             <p className="text-gray-500 ml-2 text-sm">Don't have an account? <a href="/signup" className="font-semibold hover:underline" style={{ color: "#608D4B" }} >Sign up </a></p>

//                         </div>

//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Signup;

// import React, {useState} from "react";
// import { Link } from 'react-router-dom';
// import logo from "../assets/foodlogo.png";
// import login from "../assets/frontpage2.png";

//     const Signup = ({ history }) => {
//         const [formData, setFormData] = useState({
//             email: '',
//             password: ''
//         });

//         const handleChange = (e) => {
//             setFormData({ ...formData, [e.target.name]: e.target.value });
//         };

//         const handleSubmit = async (e) => {
//             e.preventDefault();

//             try {
//                 const response = await fetch('http://localhost:8000/api/login/', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(formData)
//                 });

//                 if (response.ok) {
//                     // Login successful, navigate to the homepage
//                     history.push('/');
//                 } else {
//                     // Login failed
//                     console.error('Login failed');
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };
//     return (
//         <div>
//             <div className=" w-full text-white flex  items-center mt-12">
//                 <div className="flex items-center">
//                 <a href="/">
//                   <img src={logo} alt="Logo" className="w-60 h-29 object-contain ml-14" />
//                 </a>
//                 </div>
//                 <div className="ml-auto mr-14">
//                     <Link to="/signup" className="bg-gray-100 text-black hover:bg-[#979996] text-sm font-bold py-3 px-6 rounded mr-4">Sign Up</Link>
//                     <button className="bg-[#608D4B] text-white hover:bg-[#43712E] text-sm font-bold py-3 px-6 rounded">Login</button>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto mt-24 bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                 <div className="flex justify-center">
//                     {/* Left Section (Image) */}
//                     <div className="w-1/2 mr-2">
//                         <img src={login} alt="Image" className="w-full" />
//                     </div>

//                     {/* Right Section (Form) */}
//                     <div className="w-1/2 ml-2">
//                         <p className="text-gray-700 text-center text-2xl font-bold ml-8 mb-4 mt-52">Login </p>
//                         <form onSubmit={handleSubmit}>

//                             <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="email">Email</label>
//                                 <input className="shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="password">Password</label>
//                                 <input className="shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
//                             </div>

//                             <div className="flex items-center justify-between">
//                                 <button className="bg-[#608D4B] hover:bg-[#43712E] text-white ml-2 font-semibold mt-4 py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
//                                     Login
//                                 </button>
//                             </div>

//                         </form>

//                         <div className="flex mt-6">
//                             <p className="text-gray-500 ml-2 text-sm">Don't have an account? <a href="/signup" className="font-semibold hover:underline" style={{ color: "#608D4B" }} >Sign up </a></p>

//                         </div>

//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/foodlogo.png";
import login from "../assets/frontpage2.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST", // Send a POST request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      

      const res = await response.json();
      console.log(res);

      if (response.ok) {
        // Login successful, redirect to the homepage
        localStorage.setItem("token", res.token);
        localStorage.setItem("username", res.username);
        window.location.href = "/"; // Redirect to homepage
      } else {
        // Login failed
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="w-full text-white flex items-center mt-12">
        <div className="flex items-center">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="w-60 h-29 object-contain ml-14"
            />
          </a>
        </div>
        <div className="ml-auto mr-14">
          <Link
            to="/signup"
            className="bg-gray-100 text-black hover:bg-[#979996] text-sm font-bold py-3 px-6 rounded mr-4"
          >
            Sign Up
          </Link>
          <button className="bg-[#608D4B] text-white hover:bg-[#43712E] text-sm font-bold py-3 px-6 rounded">
            Login
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex justify-center">
          {/* Left Section (Image) */}
          <div className="w-1/2 mr-2">
            <img src={login} alt="Image" className="w-full" />
          </div>

          {/* Right Section (Form) */}
          <div className="w-1/2 ml-2">
            <p className="text-gray-700 text-center text-2xl font-bold ml-8 mb-4 mt-52">
              Login
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-[#608D4B] hover:bg-[#43712E] text-white ml-2 font-semibold mt-4 py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                  type="submit" 
                >
                  Login
                </button>
              </div>
            </form>

            <div className="flex mt-6">
              <p className="text-gray-500 ml-2 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold hover:underline"
                  style={{ color: "#608D4B" }}
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
