// import React from 'react';
// import logo from "../assets/foodlogo.png";
// import { Link,  useParams} from 'react-router-dom';

// export default function CuisinePage() {

//     const { name } = useParams();

//   return (
//     <div>
//     {/* Logo and navigation row */}
//     <div className="w-full text-white flex items-center mt-12">
//       <div className="flex items-center">
//         <a href="/">
//           <img src={logo} alt="Logo" className="w-60 h-29 object-contain ml-14" />
//         </a>
//       </div>
//       <div className="ml-auto mr-14">
//         <Link to="/signup" className="bg-gray-100 text-black hover:bg-[#979996] text-sm font-bold py-3 px-6 rounded mr-4">Sign Up</Link>
//         <Link to="/login" className="bg-[#608D4B] text-white hover:bg-[#43712E] text-sm font-bold py-3 px-6 rounded">Login</Link>
//       </div>
//     </div>

//     {/* Bar below the logo row */}
//     <div className="bar-wrapper mt-10">
//       <div className="bar w-full flex items-center justify-between shadow-sm text-black mt-4 py-2 px-4">
//         <div>
//           <span className="text-2xl ml-[850px] font-bold">{name || "Default Recipe Name"}</span>
//         </div>
        
//       </div>
//     </div>
//   </div>
// )
// }



// import React from 'react';
// import '../App.css'
// import logo from "../assets/foodlogo.png";
// import { Link, useParams } from 'react-router-dom';
// import american from '../assets/american.png';

// const recipesData = [
//     { id: 1, name: "Fried Chicken", cookingTime: "45 mins", imageUrl: american, cuisine: "American" },
//     { id: 2, name: "Spaghetti Carbonara", cookingTime: "30 mins", imageUrl: "/images/spaghetti-carbonara.png", cuisine: "American" },
//     { id: 3, name: "Butter Chicken", cookingTime: "1 hr", imageUrl: american, cuisine: "Thai" },
//     { id: 4, name: "Sushi Platter", cookingTime: "50 mins", imageUrl: "/images/sushi-platter.png", cuisine: "American" },
//     // More recipes...
// ];

// export default function CuisinePage() {
//     const { name } = useParams(); // This will retrieve the 'name' parameter from the URL

//     // Filter recipes based on the cuisine type passed in the URL
//     const recipes = recipesData.filter(recipe => recipe.cuisine.toLowerCase() === name?.toLowerCase());

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

//             {/* Bar below the logo row */}
//             <div className="bar-wrapper mt-10">
//                 <div className="bar w-full flex items-center justify-between shadow-sm text-black mt-4 py-2 px-4">
//                     <div>
//                         <span className="text-2xl ml-[850px] font-bold">{name || "Default Recipe Name"}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Display cards */}
//             <div className="grid grid-cols-4 gap-4 p-5 ml-2 mt-8">
//                 {recipes.map(recipe => (
//                     <div key={recipe.id} className="card bg-gray-100 rounded-lg p-2 shadow-lg" onClick={() => console.log('Clicked', recipe.name)}>
//                         <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-[250px]  object-cover rounded-t-lg" />
//                         <div className="p-2">
//                             <h5 className="text-lg font-bold">{recipe.name}</h5>
//                             <p className='text-gray-500 text-sm'>Total Time: {recipe.cookingTime}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }





import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import logo from "../assets/foodlogo.png";
import american from '../assets/american.png';

// Sample data for recipes
export const recipesData = [
    { id: 1, name: "Fried Chicken", cookingTime: "45 mins", imageUrl: american, cuisine: "American" },
    { id: 2, name: "Spaghetti Carbonara", cookingTime: "30 mins", imageUrl: "/images/spaghetti-carbonara.png", cuisine: "American" },
    { id: 3, name: "Butter Chicken", cookingTime: "1 hr", imageUrl: american, cuisine: "Thai" },
    { id: 4, name: "Sushi Platter", cookingTime: "50 mins", imageUrl: "/images/sushi-platter.png", cuisine: "American" },
    // More recipes...
];

export default function CuisinePage() {
    const { name } = useParams();
    const navigate = useNavigate();
    const recipes = recipesData.filter(recipe => recipe.cuisine.toLowerCase() === name?.toLowerCase());

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
                        <span className="text-2xl ml-[850px] font-bold">{name || "Default Recipe Name"}</span>
                    </div>
                </div>
            </div>

            {/* Display cards */}
            <div className="grid grid-cols-4 gap-4 p-5 ml-2 mt-8">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="card bg-gray-100 rounded-lg p-2 shadow-lg" onClick={() => navigate(`/recipe/${encodeURIComponent(recipe.name)}`)}>
                        <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-[250px] object-cover rounded-t-lg" />
                        <div className="p-2">
                            <h5 className="text-lg font-bold">{recipe.name}</h5>
                            <p className='text-gray-500 text-sm'>Total Time: {recipe.cookingTime}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
