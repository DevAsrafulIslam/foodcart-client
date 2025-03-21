import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"; // Update with your actual logo path

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top wave decoration - hidden on small screens */}
        <div className="hidden sm:block h-12 bg-amber-600 w-full relative overflow-hidden">
          <div className="absolute w-full h-full">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
              <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
                    className="fill-gray-900"></path>
            </svg>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 sm:p-10">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6 justify-center sm:justify-start">
              <img src={logo} alt="Halal Food" className="h-10 sm:h-12 mr-3" />
              <h2 className="text-xl sm:text-2xl font-bold text-amber-500">Halal Food</h2>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-center sm:text-left text-sm sm:text-base">
              Premium halal cuisine crafted with passion and tradition. 
              Serving authentic flavors with the finest ingredients since 2010.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors duration-300">
                <FaFacebookF className="text-white text-sm" />
              </a>
              <a href="#" className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors duration-300">
                <FaTwitter className="text-white text-sm" />
              </a>
              <a href="#" className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors duration-300">
                <FaInstagram className="text-white text-sm" />
              </a>
              <a href="#" className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors duration-300">
                <FaYoutube className="text-white text-sm" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="mt-8 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 sm:before:right-auto before:mx-auto sm:before:mx-0 before:w-12 before:h-1 before:bg-amber-500 text-center sm:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-center sm:text-left">
              <li><Link to="/" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm sm:text-base">Home</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm sm:text-base">Menu</Link></li>
              <li><Link to="/order/salad" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm sm:text-base">Order Online</Link></li>
              <li><Link to="/reservations" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm sm:text-base">Reservations</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm sm:text-base">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm sm:text-base">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 sm:before:right-auto before:mx-auto sm:before:mx-0 before:w-12 before:h-1 before:bg-amber-500 text-center sm:text-left">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center sm:justify-start">
                <FaMapMarkerAlt className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">123 Halal Street, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <FaPhoneAlt className="text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+88 0192345678910</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <FaEnvelope className="text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">info@halalfood.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Opening Hours */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 sm:before:right-auto before:mx-auto sm:before:mx-0 before:w-12 before:h-1 before:bg-amber-500 text-center sm:text-left">
              Opening Hours
            </h3>
            <ul className="space-y-2 sm:space-y-3 max-w-xs mx-auto sm:mx-0">
              <li className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-amber-500">11:00 - 22:00</span>
              </li>
              <li className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-300">Saturday</span>
                <span className="text-amber-500">10:00 - 23:00</span>
              </li>
              <li className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-300">Sunday</span>
                <span className="text-amber-500">10:00 - 22:00</span>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-800 rounded-lg border border-gray-700">
              <p className="text-amber-500 font-medium mb-2 text-sm sm:text-base text-center sm:text-left">Subscribe to our newsletter</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-700 text-white px-3 py-2 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
                />
                <button className="bg-amber-600 hover:bg-amber-700 px-3 sm:px-4 py-2 rounded-r-lg transition-colors duration-300 text-sm whitespace-nowrap">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="bg-gray-950 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-xs sm:text-sm">
          <p>Copyright © {currentYear} - All rights reserved by <span className="text-amber-500">Halal Food</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
