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

import React from "react";
import logo from "../assets/foodlogo.png";
import profile from "../assets/profile.png";
import { useParams } from "react-router-dom";
import { recipesData } from "./CuisinePage"; // Recipes related to cuisines
import { coursesData } from "./CoursePage"; // Recipes related to courses

export default function RecipePage() {
  const { name } = useParams();
  const recipeName = decodeURIComponent(name);

  const username = "John Doe"; // This would normally come from user data
  const uploadDate = "April 10, 2023";

  // Search for the recipe in both datasets
  let recipe = recipesData.find((r) => r.name === recipeName);
  if (!recipe) {
    recipe = coursesData.find((r) => r.name === recipeName);
  }

  if (!recipe) {
    return <div>No recipe found</div>;
  }

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
        <div className="relative">
          <img
            src={profile}
            alt="Profile"
            className="w-15 h-14 ml-[1480px] rounded-full cursor-pointer"
          />
          {/* Online indicator */}
        </div>
      </div>
      <div></div>
      <h1 className="mt-24 text-2xl font-bold ml-16">{recipe.name}</h1>
    </div>
  );
}
