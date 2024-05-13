import React from 'react';
import bg from "../assets/cuisinebg.png"

// Example Card component
const CuisineCard = ({ name, overlayImage }) => {


    return (
        <div className="ml-16 mt-20 relative bg-cover bg-center rounded-xl shadow-lg overflow-hidden w-[350px] h-[190px] flex items-center transition duration-300 ease-in-out hover:shadow-xl hover:scale-105 transform"
            style={{ backgroundImage: `url(${bg})` }}>
            <img src={overlayImage} alt={name} className="w-[130px] h-[130px] rounded-full ml-2   " />
            <div className="text-white text-2xl font-bold ml-8">{name}</div>
        </div>
    );
};

export default CuisineCard;

