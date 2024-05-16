// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { recipesData } from './CuisinePage';  // Recipes related to cuisines
// import { coursesData } from './CoursePage';   // Recipes related to courses

// export default function RecipePage() {
//     const { name } = useParams();
//     const recipeName = decodeURIComponent(name);

//     // Search for the recipe in both datasets
//     let recipe = recipesData.find(r => r.name === recipeName);
//     if (!recipe) {
//         recipe = coursesData.find(r => r.name === recipeName);
//     }

//     if (!recipe) {
//         return <div>No recipe found</div>;
//     }

//     return (
//         <div>
//             <h1>{recipe.name}</h1>
//             <img src={recipe.imageUrl} alt={`${recipe.name} image`} />
//             <p>Cooking Time: {recipe.cookingTime}</p>
//             <p>{recipe.cuisine ? `Cuisine: ${recipe.cuisine}` : `Course: ${recipe.course}`}</p>
//         </div>
//     );
// }

// import React from "react";
// import { FaUser, FaCalendarAlt } from "react-icons/fa";
// import logo from "../assets/foodlogo.png";
// import profile from "../assets/profile.png";
// import { useParams, useLocation } from "react-router-dom";
// import { recipesData } from "./CuisinePage"; // Recipes related to cuisines
// import { coursesData } from "./CoursePage"; // Recipes related to courses



// export default function RecipePage() {
//   const { name } = useParams();
//   const { search } = useLocation();
//   const recipeName = decodeURIComponent(name);
//   const imageUrl = new URLSearchParams(search).get("imageUrl");

//   const username = "John Doe"; // This would normally come from user data
//   const uploadDate = "April 10, 2023";
//   const cookingTime = "30 mins"; // Sample cooking time (replace with actual data)
//   const servings = "4 servings";

//   // Search for the recipe in both datasets
//   let recipe = recipesData.find((r) => r.name === recipeName);
//   if (!recipe) {
//     recipe = coursesData.find((r) => r.name === recipeName);
//   }

//   if (!recipe) {
//     return <div>No recipe found</div>;
//   }

//   return (
//     <div>
//       <div className="navbar w-full text-white flex items-center mt-12" style={{ zIndex: 100, position: 'relative' }}>
//         <div className="flex items-center">
//           <a href="/">
//             <img src={logo} alt="Logo" className="w-60 h-29 object-contain ml-14" />
//           </a>
//         </div>
//         <div className="flex items-center ml-auto mr-14 realtive"> {/* Aligns to the right */}


//           {/* Profile Image */}
//           <div className="relative">
//             <img src={profile} alt="Profile" className="w-15 h-14 rounded-full cursor-pointer" />
//             {/* Online indicator */}
//           </div>
//         </div>
//       </div>
//       <div><h1 className="mt-20 text-2xl font-bold ml-16">{recipe.name}</h1></div>
//       <div className="ml-16 mt-4 flex items-center"> {/* Container for user logo and name */}
//         <div className=" flex items-center justify-center ">
//           <FaUser className="w-3 h-3 mr-1" style={{ color: '#608D4B' }} /> {/* Default user icon */}
//         </div>
//         <span className="ml-2 text-sm">{username}</span>
//         <FaCalendarAlt className="w-3 h-3 ml-8 mr-1" style={{ color: '#608D4B' }} /> {/* Default calendar icon */}
//         <span className="ml-2 text-sm">{uploadDate}</span>
//       </div>
//       <hr className="mt-3 " />
//       {imageUrl && (
//         <div className="mt-4 mx-auto w-3/4"> {/* Centered container with 3/4 width */}
//           <img src={imageUrl} alt="Uploaded Recipe" className="h-[400px] w-[600px]" />
//         </div>
//       )}

//       <div className="mt-4 ml-4  w-3/4 flex justify-between px-[480px]"> {/* Container for cooking time and servings */}
//         <div>
//           <h3 className="text-sm text-gray-400">Cooking Time</h3>
//           <p className="text-sm font-semibold">{cookingTime}</p>
//         </div>
//         <div className="border-l border-gray-400 "></div>
//         <div>
//           <h3 className="text-sm ml-2 text-gray-400">Servings</h3>
//           <p className="text-sm ml-2 font-semibold ">{servings}</p>
//         </div>
//       </div>

//       <div className="mt-4 ml-16">
        
//         <p className="text-md mt-2">{recipe.description}</p>
//       </div>

//     </div>
//   );
// }




import React, { useEffect, useState } from 'react';

export default function RecipeDetails({ recipeId }) {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchRecipe() {
            const response = await fetch(`/api/recipes/${recipeId}`);
            const data = await response.json();
            setRecipe(data);
        }
        fetchRecipe();
    }, [recipeId]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>By {recipe.author}</p>
            <p>Posted on: {new Date(recipe.datePosted).toLocaleDateString()}</p>
            {recipe.imageUrl && <img src={recipe.imageUrl} alt="Recipe" />}
            <p>Cooking Time: {recipe.cookingTime}</p>
            <p>Servings: {recipe.servings}</p>
            <p>{recipe.description}</p>
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
}
