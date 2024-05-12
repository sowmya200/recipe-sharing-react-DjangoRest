// import React from 'react';
// import { FaSearch } from 'react-icons/fa';
// import logo from "../assets/foodlogo.png";
// import profile from "../assets/profile.png";

// export default function Home() {
//     return (
//         <div className="w-full text-white flex items-center mt-12" style={{ zIndex: 100, position: 'relative' }}>
//             <div className="flex items-center">
//                 <img src={logo} alt="Logo" className="w-60 h-29 object-contain ml-14" />
//             </div>
//             <div className="flex items-center ml-auto mr-14 realtive"> {/* Aligns to the right */}
//                 {/* Search Bar */}
//                 <div className="relative">
//                     <input type="text" placeholder="Search..." className="bg-gray-100 text-black text-sm font-bold py-2 px-4 rounded pr-10" />
//                     {/* Search Icon */}
//                     <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
//                 </div>

//                 {/* Profile Image */}
//                 <div className="relative">
//                     <img src={profile} alt="Profile" className="w-15 h-14 rounded-full  cursor-pointer" />


//                 </div>
//             </div>

//             <div className="w-full flex items-center justify-between bg-gray-800 text-white py-2 px-4">
//                 <div>
//                     <span className="text-sm font-bold">Text on the left</span>
//                 </div>
//                 <div>
//                     <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Button on the right</button>
//                 </div>
//             </div>


//         </div>
//     );
// }




import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from "../assets/foodlogo.png";
import profile from "../assets/profile.png";

export default function Home() {

    const [isFocused, setIsFocused] = useState(false);


    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleFileClick = () => {
        document.getElementById('fileInput').click();
    };



    return (
        <div>
            {/* Navbar */}
            <div className="navbar w-full text-white flex items-center mt-12" style={{ zIndex: 100, position: 'relative' }}>
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-60 h-29 object-contain ml-14" />
                </div>
                <div className="flex items-center ml-auto mr-14 realtive"> {/* Aligns to the right */}
                    {/* Search Bar */}
                    <div className="relative">
                        <input type="text" placeholder="Search..." className="bg-gray-100 text-black text-sm font-bold py-2 px-4 rounded pr-10" />
                        {/* Search Icon */}
                        <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                    </div>

                    {/* Profile Image */}
                    <div className="relative">
                        <img src={profile} alt="Profile" className="w-15 h-14 rounded-full cursor-pointer" />
                        {/* Online indicator */}
                    </div>
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

                <form >
                    <div className="mb-4 pt-4">
                        <label className="block text-gray-700 text-md text-lg mt-12 mb-2 ml-2" htmlFor="recipetitle">Recipe Title:</label>
                        <input
                            className={`shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none  ${isFocused ? 'border-[#608D4B]  border-solid border-2' : 'border-gray-100'}`}
                            id="username"
                            type="text"
                            placeholder="Enter Recipe Title"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-md text-lg mt-2 mb-2 ml-2" htmlFor="fileInput">
                            Upload Image:
                        </label>
                        <input
                            id="fileInput"
                            className="hidden"
                            type="file"
                            accept="image/*"
                        />
                        <button
                            onClick={handleFileClick}
                            className={` text-black  py-5 px-4 rounded focus:outline-none focus:shadow-outline border border-gray-200 ml-2 ${isFocused ? 'border-[#608D4B] border-solid border-2' : 'border-gray-100'}`}>
                            Select Image
                        </button>
                    </div>

                    <div className="mb-4 pt-4">
                        <label className="block text-gray-700 text-md text-lg mt-12 mb-2 ml-2" htmlFor="username">Recipe Title:</label>
                        <input
                            className={`shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none  ${isFocused ? 'border-[#608D4B]  border-solid border-2' : 'border-gray-100'}`}
                            id="username"
                            type="text"
                            placeholder="Enter Recipe Title"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="mb-4 pt-4">
                        <label className="block text-gray-700 text-md text-lg mt-12 mb-2 ml-2" htmlFor="username">Recipe Title:</label>
                        <input
                            className={`shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none  ${isFocused ? 'border-[#608D4B]  border-solid border-2' : 'border-gray-100'}`}
                            id="username"
                            type="text"
                            placeholder="Enter Recipe Title"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="mb-4 pt-4">
                        <label className="block text-gray-700 text-md text-lg mt-12 mb-2 ml-2" htmlFor="username">Recipe Title:</label>
                        <input
                            className={`shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none  ${isFocused ? 'border-[#608D4B]  border-solid border-2' : 'border-gray-100'}`}
                            id="username"
                            type="text"
                            placeholder="Enter Recipe Title"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="mb-4 pt-4">
                        <label className="block text-gray-700 text-md text-lg mt-12 mb-2 ml-2" htmlFor="username">Recipe Title:</label>
                        <input
                            className={`shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none  ${isFocused ? 'border-[#608D4B]  border-solid border-2' : 'border-gray-100'}`}
                            id="username"
                            type="text"
                            placeholder="Enter Recipe Title"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="mb-4 pt-4">
                        <label className="block text-gray-700 text-md text-lg mt-12 mb-2 ml-2" htmlFor="username">Recipe Title:</label>
                        <input
                            className={`shadow appearance-none border rounded w-full ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none  ${isFocused ? 'border-[#608D4B]  border-solid border-2' : 'border-gray-100'}`}
                            id="username"
                            type="text"
                            placeholder="Enter Recipe Title"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>







                    <div className="flex items-center justify-between">
                        <button className="bg-[#608D4B] hover:bg-[#43712E] text-white ml-2 font-semibold mt-4 py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
