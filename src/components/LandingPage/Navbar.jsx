import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import icons for the logo and CTAs
import { LogIn, UserPlus, Shield, Zap } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-950/80 backdrop-blur-lg shadow-xl shadow-gray-950/50 fixed top-0 left-0 z-50 transition-colors duration-300 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO - Now includes an intuitive icon */}
        <Link to="/" className="flex items-center gap-2 group"> {/* Container for logo icon and text */}
          {/* Logo Icon: Shield with a subtle Zap inside */}
          <div className="relative flex items-center justify-center w-8 h-8">
            <Shield size={28} className="text-blue-500 absolute group-hover:text-blue-400 transition-colors" /> {/* Main shield icon */}
            <Zap size={14} className="text-blue-300 absolute mt-1 group-hover:text-blue-200 transition-colors" /> {/* Smaller zap icon inside */}
          </div>
          <h1 className="text-2xl font-extrabold text-blue-400 tracking-wider group-hover:text-blue-300 transition-colors">
            DigitalAxis
          </h1>
        </Link>

        {/* Desktop Menu - Improved Link Text */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium text-base">
          <li>
            <Link to="/" className="hover:text-blue-500 transition-colors duration-200">Home</Link>
          </li>
          <li>
            <a href="#features" className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">Key Features</a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">Workflow</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">Contact & Support</a>
          </li>
        </ul>

        {/* Desktop CTAs (Login + Prominent Sign Up) */}
        <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-gray-300 px-4 py-2 rounded-full font-medium hover:text-blue-400 transition-colors duration-200 flex items-center">
                <LogIn size={18} className="mr-1" /> Login
            </Link>
            <Link to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 flex items-center">
                <UserPlus size={18} className="mr-1" /> Sign Up
            </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden block text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* Mobile Dropdown Menu - Updated Link Text */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/90 backdrop-blur-md shadow-2xl px-6 py-4 space-y-4 border-t border-gray-700">
          <div className="flex flex-col gap-4 text-gray-300 font-medium">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-500 py-1 transition-colors duration-200">Home</Link>
            <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-blue-500 py-1 transition-colors duration-200 cursor-pointer">Key Features</a>
            <a href="#how-it-works" onClick={() => setIsOpen(false)} className="hover:text-blue-500 py-1 transition-colors duration-200 cursor-pointer">Workflow</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-500 py-1 transition-colors duration-200 cursor-pointer">Contact & Support</a>
          </div>

          {/* Mobile CTAs */}
          <Link to="/signup" onClick={() => setIsOpen(false)} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
            <UserPlus size={18} className="mr-1" /> Sign Up
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="w-full border border-gray-600 text-gray-300 py-2 rounded-full font-medium hover:border-blue-400 hover:text-blue-400 transition-colors duration-200 flex items-center justify-center">
            <LogIn size={18} className="mr-1" /> Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;