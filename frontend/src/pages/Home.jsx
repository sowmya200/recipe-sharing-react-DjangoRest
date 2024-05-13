import React from 'react';
import '../App.css';
import CuisineCard from '../components/CuisineCard';
import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';
import logo from "../assets/foodlogo.png";
import hpage from "../assets/homepage1.png";
import hpage1 from "../assets/homepage2.png";
import american from '../assets/american.png';
import italian from '../assets/italian.png';
import indian from '../assets/indian.png';
import chinese from '../assets/chinese.png';
import mexican from '../assets/mexican.png';
import french from '../assets/french.png';
import japanese from '../assets/japanese.png';
import thai from '../assets/thai.png';
import middle from '../assets/middle.png';
import greek from '../assets/greek.png';
import soup from '../assets/soup.png';


export default function Home() {
    
    const cards = [
        { id: 1, name: "American", overlayImage:american },
        { id: 2, name: "Italian", overlayImage: italian },
        { id: 3, name: "Indian", overlayImage:indian },
        { id: 4, name: "Chinese", overlayImage: chinese },
        { id: 5, name: "Mexican", overlayImage:mexican },
        { id: 6, name: "French", overlayImage: french },
        { id: 7, name: "Japanese", overlayImage: japanese },
        { id: 8, name: "Thai", overlayImage: thai },
        { id: 9, name: "Middle Eastern", overlayImage:middle },
        { id: 10, name: "Greek", overlayImage: greek },
        
    ];
    const courses = [
        { id: 1, name: "Soup", overlayImage:soup },
        // { id: 2, name: "Italian", overlayImage: italian },
        // { id: 3, name: "Indian", overlayImage:indian },
        // { id: 4, name: "Chinese", overlayImage: chinese },
        // { id: 5, name: "Mexican", overlayImage:mexican },
        // { id: 6, name: "French", overlayImage: french },
        // { id: 7, name: "Japanese", overlayImage: japanese },
        // { id: 8, name: "Thai", overlayImage: thai },
        // { id: 9, name: "Middle Eastern", overlayImage:middle },
        // { id: 10, name: "Greek", overlayImage: greek },
        
    ];

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

            {/* Create Recipes Section */}

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



            {/* Cuisines Section */}
            <div className="ml-16 text-4xl font-bold pt-6 mt-10 " >Cuisines</div>
            <div className=" grid grid-cols-4 ">
            {cards.map(card => (
                <CuisineCard key={card.id} name={card.name} overlayImage={card.overlayImage} />
            ))}
        </div>

        

        {/* Course of Meal */}
        <div className="ml-16 text-4xl font-bold pt-6 mt-10 " >Course of Meal</div>
            <div className=" grid grid-cols-4 ">
            {courses.map(course => (
                <CourseCard key={course.id} name={course.name} overlayImage={course.overlayImage} />
            ))}
        </div>


        </div >

    );
}
