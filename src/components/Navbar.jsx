import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 shadow-md">
      <h1 className="text-xl font-bold">MyBrand</h1>
      <div className="space-x-5">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;