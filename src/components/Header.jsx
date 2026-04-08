import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between px-5 py-1 bg-amber-200 text-black">
      <div>
        <a className="flex  text-xl md:text-3xl" href="#">
          <img className="w-10" src={Logo} alt="logo" />
          Shop
        </a>
      </div>
      <div className="hidden md:flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    
    </div>
  );
};

export default Header;
