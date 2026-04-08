import React from "react";

const Hero = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center text-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to My Website
      </h1>
      <p className="mb-6 text-gray-600">
        Build amazing landing pages with React 
      </p>
      <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
};

export default Hero;