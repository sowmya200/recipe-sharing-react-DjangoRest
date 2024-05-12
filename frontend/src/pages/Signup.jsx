import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/foodlogo.png";
import register from "../assets/frontpage.png";
import google from "../assets/google.png"

const Signup = () => {
    return (
        <div>
            <div className=" w-full text-white flex  items-center mt-12">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-60 h-29 object-contain ml-14" />

                </div>
                <div className="ml-auto mr-14">
                    <button className="bg-[#608D4B] text-white hover:bg-[#43712E] text-sm font-bold py-3 px-6 mr-3 rounded">Sign Up</button>
                    <Link to="/login" className="bg-gray-100 text-black hover:bg-[#979996] text-sm font-bold py-3 px-6 rounded mr-4">Login</Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex justify-center">
                    {/* Left Section (Image) */}
                    <div className="w-1/2 mr-2">
                        <img src={register} alt="Image" className="w-full" />
                    </div>

                    {/* Right Section (Form) */}
                    <div className="w-1/2 ml-2">
                        <p className="text-gray-700 text-center text-2xl font-bold ml-8 mb-4 mt-24">Register</p>
                        <form >
                            <div className="mb-4 pt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="username">Username</label>
                                <input className="shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="email">Email</label>
                                <input className="shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="password">Password</label>
                                <input className="shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="confirmPassword">Confirm Password</label>
                                <input className="shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="Confirm Password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-[#608D4B] hover:bg-[#43712E] text-white ml-2 font-semibold mt-4 py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Sign Up
                                </button>
                            </div>

                        </form>
                        <div className="flex items-center ">
                            <p className=" text-gray-500 text-sm ml-2 mt-8 ">Or you can join with </p>
                            <div className="max-w-7xl mx-5 mt-4 flex justify-center">
                                <button className=" flex items-center hover:bg-gray-200 text-gray-500 shadow font-semibold mt-2 py-3 px-7 rounded-md focus:outline-none focus:shadow-outline" type="button">
                                    <img src={google} alt="Google Icon" className="w-6 h-6 mr-4" />
                                    Sign in with Google
                                </button>
                            </div>
                        </div>

                        <div className="flex mt-6">
                            <p className="text-gray-500 ml-2 text-sm">Already have an account? <a href="/login" className="font-semibold hover:underline" style={{ color: "#608D4B" }} >Log in </a></p>

                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Signup;