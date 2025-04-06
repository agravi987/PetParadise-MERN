import React, { useState } from "react";
import "../../index.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-purple-700">
              Pet Paradise
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="menu-btn"
              className="text-purple-700 hover:text-purple-500 focus:outline-none"
              onClick={toggleMenu}
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Nav Links */}
            <div className="flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-purple-700 font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-700 font-medium">
                About
              </a>
              <a href="#store" className="text-gray-700 hover:text-purple-700 font-medium">
                Store
              </a>
              <a href="#service" className="text-gray-700 hover:text-purple-700 font-medium">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-700 font-medium">
                Contact
              </a>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <a href="pet-hotels.html">
                <button
                  id="book_now"
                  className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
                >
                  Book Now
                </button>
              </a>
              <button
                id="login_signup"
                className="bg-white text-purple-700 border border-purple-700 px-5 py-2 rounded-lg hover:bg-purple-50 transition duration-300"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`md:hidden ${isMobileMenuOpen ? "" : "hidden"}`}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          <a href="#home" className="block text-gray-700 hover:text-purple-700 px-4 py-2 rounded-md">
            Home
          </a>
          <a href="#about" className="block text-gray-700 hover:text-purple-700 px-4 py-2 rounded-md">
            About
          </a>
          <a href="#store" className="block text-gray-700 hover:text-purple-700 px-4 py-2 rounded-md">
            Store
          </a>
          <a href="#service" className="block text-gray-700 hover:text-purple-700 px-4 py-2 rounded-md">
            Services
          </a>
          <a href="#contact" className="block text-gray-700 hover:text-purple-700 px-4 py-2 rounded-md">
            Contact
          </a>
          <button
            id="book_now_mobile"
            className="block w-full text-left bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
          >
            Book Now
          </button>
          <button
            id="login_signup_mobile"
            className="block w-full text-left bg-white text-purple-700 border border-purple-700 px-4 py-2 rounded-lg hover:bg-purple-50"
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
