import React from "react";
import { Send, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-gray-950 text-gray-300 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION: GRID LAYOUT */}
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* COLUMN 1: Company Info & Contact Details */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-extrabold text-blue-400 tracking-wider mb-4">
              DigitalAxis
            </h2>
            <p className="text-gray-400 text-base"> {/* INCREASED */}
              AI-powered website attack detection to keep your websites secure in real-time.
            </p>
            
            {/* Contact icons */}
            <div className="mt-6 space-y-3 text-base"> {/* INCREASED */}
                <p className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    <Mail size={18} className="mr-3 text-blue-500" /> support@digitalaxis.com
                </p>
                <p className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    <MapPin size={18} className="mr-3 text-blue-500" /> San Francisco, CA
                </p>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white border-b border-blue-400/50 pb-1">Quick Links</h3> {/* INCREASED TITLE */}
            <ul className="space-y-3 text-gray-400 text-lg"> {/* INCREASED LINK TEXT */}
              <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Home</li>
              <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Features</li>
              <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">How It Works</li>
              <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Support</li>
              <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Login</li>
            </ul>
          </div>

          {/* COLUMN 3: Resources */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white border-b border-blue-400/50 pb-1">Resources</h3> {/* INCREASED TITLE */}
            <ul className="space-y-3 text-gray-400 text-lg"> {/* INCREASED LINK TEXT */}
              <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Documentation</li>
              <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Blog</li>
              <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Case Studies</li>
              <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Form - Text Size Increased */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white border-b border-blue-400/50 pb-1">Get in Touch</h3> {/* INCREASED TITLE */}
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200 text-base" // INCREASED PADDING & TEXT
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200 text-base" // INCREASED PADDING & TEXT
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200 text-base" // INCREASED PADDING & TEXT
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-lg" // INCREASED BUTTON TEXT
              >
                 <Send size={18} className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 text-center text-gray-500 text-base"> {/* INCREASED COPYRIGHT TEXT */}
          &copy; {currentYear} DigitalAxis. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;