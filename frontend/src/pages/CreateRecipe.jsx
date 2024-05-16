import React, { useState } from 'react';
import { FaSearch, FaUpload} from 'react-icons/fa';
import logo from "../assets/foodlogo.png";
import profile from "../assets/profile.png";

export default function Home() {

    const [focusStates, setFocusStates] = useState({});
    const [isClicked, setIsClicked] = useState(false);
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [description, setDescription] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [ingredients, setIngredients] = useState([{ id: 0, value: "" }]);
    const [instructions, setInstructions] = useState([]); // State to track all instructions
    const [instructionInput, setInstructionInput] = useState("");
    const [hours, setHours] = useState(''); // State for hours
    const [minutes, setMinutes] = useState(''); // State for minutes
    const [cuisine, setCuisine] = useState('');
    const [coursemeal, setCoursemeal] = useState('');



    const handleFocus = (id) => {
        setFocusStates(prev => ({ ...prev, [id]: true }));
    };

    const handleBlur = (id) => {
        setFocusStates(prev => ({ ...prev, [id]: false }));
    };

    const handleFileClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleClick = () => {
        setIsClicked(true);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        // Read the file and display preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    // Function to simulate a click on the file input field
    const triggerFileSelectPopup = () => {
        document.getElementById('fileInput').click();
        setIsClicked(true); // Update the isClicked state when button is clicked
    };
    const handleDescriptionChange = (event) => {
        const words = event.target.value.trim().split(/\s+/).filter(Boolean);  // Split by spaces and filter out empty strings
        setWordCount(words.length);  // Update word count
        setDescription(event.target.value);  // Update description
    };

    const handleAddIngredient = () => {
        const newIngredient = { id: ingredients.length, value: "" };
        setIngredients([...ingredients, newIngredient]); // Append new ingredient input
    };

    const handleIngredientChange = (id, value) => {
        const newIngredients = ingredients.map(ing => {
            if (ing.id === id) {
                return { ...ing, value };
            }
            return ing;
        });
        setIngredients(newIngredients);
    };
    
    const handleRemoveIngredient = (id) => {
        setIngredients(ingredients.filter(ing => ing.id !== id));
    };

    const handleInstructionChange = (event) => {
        setInstructionInput(event.target.value); // Update the current input
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action of the enter key
            if (instructionInput.trim()) { // Check if the input is not just empty spaces
                setInstructions(prevInstructions => [...prevInstructions, instructionInput]); // Add the new instruction
                setInstructionInput(""); // Clear the input field
            }
        }
    };

    const handleChange = (event, type) => {
        const value = event.target.value;
        if (type === 'hours') {
            setHours(value);
        } else if (type === 'minutes') {
            setMinutes(value);
        }
    };

    const cuisineTypes = [
        "American", "Chinese", "French", "Indian", "Italian",
        "Japanese", "Mexican", "Thai", "Middle Eastern", "Greek"
    ];

    const coursemealTypes = [
        "Soup", "Salad", "Beverages",  "Main Course",
        "Dessert", "Curries and Dips", "Snack"
    ];

    const handleCuisineChange = (event) => {
        setCuisine(event.target.value);
    };

    const handleCourseMeal = (event) => {
        setCoursemeal(event.target.value);
    };


    return (
        <div>
            {/* Navbar */}
            <div className="navbar w-full text-white flex items-center mt-12" style={{ zIndex: 100, position: 'relative' }}>
                <div className="flex items-center">
                <a href="/">
                  <img src={logo} alt="Logo" className="w-60 h-29 object-contain ml-14" />
                </a>
                </div>
                
            </div>

            {/* Bar Below Logo Content */}
            <div className="bar-wrapper">
                <div className="bar w-full flex items-center justify-between shadow-sm  text-black mt-4 py-2 px-4">
                    <div>
                        <span className="text-lg ml-12 font-bold">Create new recipe</span>
                    </div>
                    <div>
                        <button className="bg-[#608D4B] hover:bg-[#43712E] text-white py-2 px-4 mr-12 rounded-md">Save</button>
                    </div>
                </div>
            </div>

            <div className="w-1/2 ml-[380px]">
                <form>
                    {/* Recipe Title */}
                    <div className="mb-4 pt-4">
                        <label htmlFor="recipeTitle1" className="block text-gray-700 text-md text-lg mt-12 mb-2 ml-2">Recipe Title:</label>
                        <input
                            id="recipeTitle1"
                            type="text"
                            placeholder="Enter Recipe Title"
                            className={` border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none ${focusStates['recipeTitle1'] ? 'border-[#608D4B] border-solid border-2' : 'border-gray-200'}`}
                            onFocus={() => handleFocus('recipeTitle1')}
                            onBlur={() => handleBlur('recipeTitle1')}
                        />
                    </div>

                  
                    {/* Image Upload */}
                    {/* <div className="mb-4">
            <label htmlFor="fileInput" className="block text-gray-700 text-md text-lg mt-2 mb-2 ml-2">Upload Image:</label>
            <div className="flex items-center">
                <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <button
                   onClick={triggerFileSelectPopup}
                   
                    className={`flex items-center justify-center text-black py-5 px-4 rounded focus:outline-none border ml-2 ${isClicked ? 'border-[#608D4B] border-solid border-2' : 'border-gray-200'}`}>
                    <FaUpload className="mr-2" style={{ color: '#608D4B' }} /> Select Image
                </button>
                {previewUrl && (
                <img src={previewUrl} alt="Preview" style={{ width: '200px', height: '200px' }} />
            )}
            </div>
        </div> */}
        <div className="mb-4">
            <label htmlFor="fileInput" className="block text-gray-700 text-md text-lg mt-2 mb-2 ml-2">Upload Image:</label>
            <div className="flex items-center">
                <input
                    id="fileInput"
                    type="file"                    
                    accept="image/*"
                    className='ml-2'
                    onChange={handleFileChange}
                />
                {/* <button
                    onClick={triggerFileSelectPopup}
                    className={`flex items-center justify-center text-black py-5 px-4 rounded focus:outline-none border ml-2 ${isClicked ? 'border-[#608D4B] border-solid border-2' : 'border-gray-200'}`}>
                    <FaUpload className="mr-2" style={{ color: '#608D4B' }} /> Select Image
                </button> */}
               
            </div>
        </div>

  
                     {/* Description */}                
                     <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 text-md text-lg mt-2 mb-2 ml-2">Description:</label>
                <textarea
                    id="description"
                    placeholder="Enter Recipe Description"
                    rows="4"
                    className={`border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none ${focusStates['description'] ? 'border-[#608D4B] border-solid border-2' : 'border-gray-200'}`}
                    onFocus={() => handleFocus('description')}
                    onBlur={() => handleBlur('description')}
                    onChange={handleDescriptionChange}
                />
                <div className="text-right text-xs text-gray-500  mr-2">
                    {`${wordCount}/50 `}  
                </div>
            </div>

                    {/* Ingredients */}
                    {ingredients.map((ingredient, index) => (
                    <div key={ingredient.id} className="mb-4">
                        {index === 0 ? ( // Only show label for the first ingredient input
                        <label htmlFor={`ingredients-${ingredient.id}`} className="block text-gray-700 text-md text-lg mb-2 ml-2">Ingredients:</label>
                         ) : null}
                        <input
                         id={`ingredients-${ingredient.id}`}
                         type="text"
                         placeholder="Enter Ingredients"
                         className={`border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none ${focusStates[`ingredients-${ingredient.id}`] ? 'border-[#608D4B] border-solid border-2' : 'border-gray-200'}`}
                         onFocus={() => handleFocus(`ingredients-${ingredient.id}`)}
                         onBlur={() => handleBlur(`ingredients-${ingredient.id}`)}
                         onChange={(e) => handleIngredientChange(ingredient.id, e.target.value)}
                         />
                    </div>
                    ))}
                    <p className="ml-3 mt-2 cursor-pointer" style={{ color: '#608D4B', textDecoration: 'none' }}
                    onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    onClick={handleAddIngredient}>
                    + Add Ingredients
                    </p>


                     {/* Instructions */}
                     <div className="mb-4">
                <label htmlFor="instructions" className="block text-gray-700 text-md text-lg mt-4 mb-2 ml-2">Instructions:</label>
                {instructions.map((instruction, index) => (
                    <p key={index} className="ml-2 mb-3 text-gray-700"><strong> STEP {index + 1} : </strong>{instruction}</p> // Display instructions with step numbers
                ))}
                <input
                    id="instructions"
                    type="text"
                    placeholder="Enter Instruction"
                    className={`border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none ${focusStates['instructions'] ? 'border-[#608D4B] border-solid border-2' : 'border-gray-200'}`}
                    value={instructionInput}
                    onChange={handleInstructionChange}
                    onKeyPress={handleKeyPress}
                    onFocus={() => handleFocus('instructions')}
                    onBlur={() => handleBlur('instructions')}
                />
            </div>


            {/* Servings */}
            <div className="mb-4 ">
                        <label htmlFor="servings" className="block text-gray-700 text-md text-lg mt-3 mb-2 ml-2">Servings:</label>
                        <input
                            id="servings"
                            type="text"
                            placeholder="Enter Servings"
                            className={` border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none ${focusStates['servings'] ? 'border-[#608D4B] border-solid border-2' : 'border-gray-200'}`}
                            onFocus={() => handleFocus('servings')}
                            onBlur={() => handleBlur('servings')}
                        />
                    </div>


             {/* Cooking time */}
             <div className="mb-4">
            <label htmlFor="cooktime" className="block text-gray-700 text-md text-lg mt-3 mb-2 ml-2">Cooking Time:</label>
            <div className="flex">
                <input
                    id="cooktime-hours"
                    type="number"
                    placeholder="Hours"
                    className={`border rounded w-full ml-2 mr-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none ${focusStates['cooktime-hours'] ? 'border-[#608D4B] border-solid border-2' : 'border-gray-200'}`}
                    onFocus={() => handleFocus('cooktime-hours')}
                    onBlur={() => handleBlur('cooktime-hours')}
                    value={hours}
                    onChange={(e) => handleChange(e, 'hours')}
                />
                <input
                    id="cooktime-minutes"
                    type="number"
                    placeholder="Minutes"
                    className={`border rounded w-full ml-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none ${focusStates['cooktime-minutes'] ? 'border-[#608D4B] border-solid border-2' : 'border-gray-200'}`}
                    onFocus={() => handleFocus('cooktime-minutes')}
                    onBlur={() => handleBlur('cooktime-minutes')}
                    value={minutes}
                    onChange={(e) => handleChange(e, 'minutes')}
                />
            </div>
        </div>
        

        {/* Cuisine */}
        <div className="mb-4">
            <label htmlFor="cuisineType" className="block text-gray-700 text-md text-lg mt-3 mb-2 ml-2"> Cuisine Type:</label>
            <select
                id="cuisineType"
                value={cuisine}
                onChange={handleCuisineChange}
                className="border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            >
                <option value="">Select Cuisine</option>
                {cuisineTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>

        {/* Course of meal */}
        <div className="mb-4">
            <label htmlFor="coursemeal" className="block text-gray-700 text-md text-lg mt-3 mb-2 ml-2"> Course of Meal:</label>
            <select
                id="coursemeal"
                value={cuisine}
                onChange={handleCuisineChange}
                className="border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            >
                <option value="">Select Cuisine</option>
                {coursemealTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>


                  



                    

                </form>
            </div>
        </div>
    );
}
