import React from 'react';

const CourseCard = ({ name, overlayImage }) => {
    return (
        // Use bg-gray-800 for a light black background; adjust the shade as needed
        <div className="ml-20 mt-20 relative bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-[350px] h-[190px] flex items-center transition duration-300 ease-in-out hover:shadow-xl hover:scale-105 transform">
            <img src={overlayImage} alt={name} className="object-cover" />
            <div className="text-white text-2xl font-bold  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{name}</div>
        </div>
    );
};

export default CourseCard;
