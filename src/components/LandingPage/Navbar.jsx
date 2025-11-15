import React, { useState } from "react";
// Import icons for the logo and CTAs
import { LogIn, UserPlus, Shield, Zap } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-950/80 backdrop-blur-lg shadow-xl shadow-gray-950/50 fixed top-0 left-0 z-50 transition-colors duration-300 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO - Now includes an intuitive icon */}
        <div className="flex items-center gap-2"> {/* Container for logo icon and text */}
          {/* Logo Icon: Shield with a subtle Zap inside */}
          <div className="relative flex items-center justify-center w-8 h-8">
            <Shield size={28} className="text-blue-500 absolute" /> {/* Main shield icon */}
            <Zap size={14} className="text-blue-300 absolute mt-1" /> {/* Smaller zap icon inside */}
          </div>
          <h1 className="text-2xl font-extrabold text-blue-400 tracking-wider">
            DigitalAxis
          </h1>
        </div>

        {/* Desktop Menu - Improved Link Text */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium text-base">
          <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">Key Features</li>
          <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">Workflow</li>
          <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">Contact & Support</li>
        </ul>

        {/* Desktop CTAs (Login + Prominent Sign Up) */}
        <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-300 px-4 py-2 rounded-full font-medium hover:text-blue-400 transition-colors duration-200 flex items-center">
                <LogIn size={18} className="mr-1" /> Login
            </button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 flex items-center">
                <UserPlus size={18} className="mr-1" /> Sign Up
            </button>
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
            <span className="hover:text-blue-500 cursor-pointer py-1 transition-colors duration-200">Home</span>
            <span className="hover:text-blue-500 cursor-pointer py-1 transition-colors duration-200">Key Features</span>
            <span className="hover:text-blue-500 cursor-pointer py-1 transition-colors duration-200">Workflow</span>
            <span className="hover:text-blue-500 cursor-pointer py-1 transition-colors duration-200">Contact & Support</span>
          </div>

          {/* Mobile CTAs */}
          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
            <UserPlus size={18} className="mr-1" /> Sign Up
          </button>
          <button className="w-full border border-gray-600 text-gray-300 py-2 rounded-full font-medium hover:border-blue-400 hover:text-blue-400 transition-colors duration-200 flex items-center justify-center">
            <LogIn size={18} className="mr-1" /> Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;