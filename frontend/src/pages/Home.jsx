import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/foodlogo.png";
import hpage from "../assets/homepage1.png";
import hpage1 from "../assets/homepage2.png";

export default function Home() {
    return (
        <div>
            <div className="w-full text-white flex items-center mt-12" style={{ zIndex: 100, position: 'relative' }}>
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-60 h-29 object-contain ml-14" />
                </div>
                <div className="ml-auto mr-14">

                    <Link to="/login" className="bg-[#608D4B] text-white hover:bg-[#43712E] text-sm font-bold py-3 px-6 rounded">Login</Link>
                </div>
            </div>
            <div className="flex">
                <p className='text-7xl font-bold mt-24 ml-16'>Your Daily Dish</p>
            </div>
            <div className="flex">
                <p className='text-7xl font-bold mt-2 ml-16'>A <span style={{ color: "#608D4B" }}>Food</span> Journey</p>
            </div>

            {/* Additional Text Below "A Food Journey" */}
            <div className="flex ml-16">
                <p className="text-lg text-gray-500 mt-8">Immerse yourself in our vibrant community of passionate food lovers, <br />
                    where you'll find inspiration, share your creations, and connect with <br />
                    fellow enthusiasts who share your love for all things delicious.</p>
            </div>

            <div className="flex ml-16 mt-4">

                <Link to="/signup" className="bg-[#608D4B] text-white hover:bg-[#43712E] text-sm font-bold py-3 px-6 rounded">Sign Up</Link>

            </div>

            <div className="flex ml-16 mt-2">

                <p className="text-gray-500  mt-1">Do you have account? <a href="/login" className="font-semibold hover:underline" style={{ color: "#608D4B" }} >Log in </a></p>
            </div>

            {/* Image Over the Waterflow on the Right Side */}
            <div className="flex absolute top-0 right-0 mt-12" style={{ zIndex: 15 }}>
                <img src={hpage} alt="Logo" className="w-80 h-49 mb-64 mr-[250px] mt-[230px]" />
            </div>

            {/* Waterflow (assuming it's a styled component or has appropriate styling) */}
            <div className="water-flow"></div>
            <div className="max-w-7xl mx-auto  px-8 pt-6 pb-8 mb-4 mt-32 ">
                <div className="flex justify-center">
                    {/* Left Section (Image) */}
                    <div className="w-1/2 mr-2">
                        <img src={hpage1} alt="Image" className="w-full" />
                    </div>

                    {/* Right Section (Form) */}
                    <div className="w-1/2 ml-2">
                        <p className="text-black text-center text-5xl font-bold ml-12 mb-4 mt-48">Share Your <span style={{ color: "#608D4B" }} >Recipes</span> </p>

                        <div className="flex ml-16">
                            <p className="text-lg text-center text-gray-500 ">Share your favorite recipes with the world. Join our culinary community today!</p>
                        </div>


                        <div className="flex justify-center mt-6">
                            <Link to="/createrecipe" className="bg-[#608D4B] text-center text-white hover:bg-[#43712E] text-sm font-bold py-3 px-6 ml-16 rounded">Create New Recipe</Link>
                        </div>


                    </div>
                </div>
            </div>


        </div >

    );
}
