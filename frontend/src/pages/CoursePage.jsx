import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import logo from "../assets/foodlogo.png";

import american from '../assets/american.png';

// Sample data for courses
export const coursesData = [
  { id: 1, name: "Caesar Salad", cookingTime: "15 mins", imageUrl: american, course: "Soup" },
  { id: 2, name: "Ribeye Steak", cookingTime: "1 hr", imageUrl: "/images/ribeye-steak.png", course: "Main Course" },
  { id: 3, name: "Chocolate Cake", cookingTime: "1 hr 30 mins", imageUrl: "/images/chocolate-cake.png", course: "Dessert" },
  { id: 4, name: "Tomato Soup", cookingTime: "45 mins", imageUrl: "/images/tomato-soup.png", course: "Salad" },
  // More courses...
];


export default function CoursePage() {
    const { type } = useParams();
    const navigate = useNavigate();
    const courses = coursesData.filter(recipe => recipe.course.toLowerCase() === type?.toLowerCase());

    return (
        <div>
            {/* Logo and navigation row */}
            <div className="w-full text-white flex items-center mt-12">
                <div className="flex items-center">
                    <a href="/">
                        <img src={logo} alt="Logo" className="w-60 h-29 object-contain ml-14" />
                    </a>
                </div>
                <div className="ml-auto mr-14">
                    <Link to="/signup" className="bg-gray-100 text-black hover:bg-[#979996] text-sm font-bold py-3 px-6 rounded mr-4">Sign Up</Link>
                    <Link to="/login" className="bg-[#608D4B] text-white hover:bg-[#43712E] text-sm font-bold py-3 px-6 rounded">Login</Link>
                </div>
            </div>

            {/* Bar below the logo row */}
            <div className="bar-wrapper mt-10">
                <div className="bar w-full flex items-center justify-between shadow-sm text-black mt-4 py-2 px-4">
                    <div>
                        <span className="text-2xl ml-[850px] font-bold">{type || "Default Course Type"}</span>
                    </div>
                </div>
            </div>

            {/* Display cards */}
            <div className="grid grid-cols-4 gap-4 p-5 ml-2 mt-8">
                {courses.map(course => (
                    <div key={course.id} className="card bg-gray-100 rounded-lg p-2 shadow-lg" onClick={() => navigate(`/recipe/${encodeURIComponent(course.name)}`)}>
                        <img src={course.imageUrl} alt={course.name} className="w-full h-[250px] object-cover rounded-t-lg" />
                        <div className="p-2">
                            <h5 className="text-lg font-bold">{course.name}</h5>
                            <p className='text-gray-500 text-sm'>Total Time: {course.cookingTime}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


// import React from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import '../App.css';
// import logo from "../assets/foodlogo.png";
// import american from '../assets/american.png';

// export const coursesData = [
//     { id: 1, name: "Caesar Salad", cookingTime: "15 mins", imageUrl: american, course: "Soup" },
//     { id: 2, name: "Ribeye Steak", cookingTime: "1 hr", imageUrl: "/images/ribeye-steak.png", course: "Main Course" },
//     { id: 3, name: "Chocolate Cake", cookingTime: "1 hr 30 mins", imageUrl: "/images/chocolate-cake.png", course: "Dessert" },
//     { id: 4, name: "Tomato Soup", cookingTime: "45 mins", imageUrl: "/images/tomato-soup.png", course: "Salad" },
//     // More courses...
//   ];


// export default function CoursePage() {
//     // Capturing the course name from the URL
//     const { courseName } = useParams(); // Changed 'type' to 'courseName' for clarity
//     const navigate = useNavigate();
    
//     // Filtering courses based on the courseName URL parameter
//     const courses = coursesData.filter(course => course.course.toLowerCase() === courseName?.toLowerCase());

//     if (!courseName) {
//         return <div>Course not specified</div>;
//     }

//     return (
//         <div>
//             {/* Logo and navigation row */}
//             <div className="w-full text-white flex items-center mt-12">
//                 <div className="flex items-center">
//                     <a href="/">
//                         <img src={logo} alt="Logo" className="w-60 h-29 object-contain ml-14" />
//                     </a>
//                 </div>
//                 <div className="ml-auto mr-14">
//                     <Link to="/signup" className="bg-gray-100 text-black hover:bg-[#979996] text-sm font-bold py-3 px-6 rounded mr-4">Sign Up</Link>
//                     <Link to="/login" className="bg-[#608D4B] text-white hover:bg-[#43712E] text-sm font-bold py-3 px-6 rounded">Login</Link>
//                 </div>
//             </div>

//             {/* Bar below the logo row displaying the course name */}
//             <div className="bar-wrapper mt-10">
//                 <div className="bar w-full flex items-center justify-between shadow-sm text-black mt-4 py-2 px-4">
//                     <div>
//                         <span className="text-2xl ml-[850px] font-bold">{decodeURIComponent(courseName) || "Default Course Type"}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Display cards */}
//             <div className="grid grid-cols-4 gap-4 p-5 ml-2 mt-8">
//                 {courses.map(course => (
//                     <div key={course.id} className="card bg-gray-100 rounded-lg p-2 shadow-lg" onClick={() => navigate(`/course/${encodeURIComponent(course.name)}`)}>
//                         <img src={course.imageUrl} alt={course.name} className="w-full h-[250px] object-cover rounded-t-lg" />
//                         <div className="p-2">
//                             <h5 className="text-lg font-bold">{course.name}</h5>
//                             <p className='text-gray-500 text-sm'>Total Time: {course.cookingTime}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
