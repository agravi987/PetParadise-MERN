import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../index.css";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const activeClass = "text-purple-700 font-bold border-b-2 border-purple-700";

  return (
    <nav className="bg-violet-200 shadow-md w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-purple-700">
          Pet Paradise
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-purple-700 hover:text-purple-500 focus:outline-none"
          >
            <i className="ri-menu-line text-3xl"></i>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-lg font-medium">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-purple-700 transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-purple-700 transition"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/store"
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-purple-700 transition"
              }
            >
              Store
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-purple-700 transition"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-purple-700 transition"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 ml-6">
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <button className="text-purple-700 text-lg px-5 py-2 border border-purple-700 rounded-xl hover:bg-purple-50 transition duration-300">
                    Log In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="text-white text-lg px-5 py-2 bg-purple-500 rounded-xl hover:bg-purple-600 transition duration-300">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/hotels">
                  <button className="text-white text-lg px-5 py-2 bg-purple-500 rounded-xl hover:bg-purple-600 transition duration-300">
                    Book Hotel
                  </button>
                </Link>
                <button
                  onClick={logout}
                  className="text-purple-700 text-lg px-5 py-2 border border-purple-700 rounded-xl hover:bg-purple-50 transition duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } px-6 pt-4 pb-6 space-y-4 bg-white shadow-md`}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? activeClass
              : "block text-gray-700 hover:text-purple-700 text-lg"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? activeClass
              : "block text-gray-700 hover:text-purple-700 text-lg"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) =>
            isActive
              ? activeClass
              : "block text-gray-700 hover:text-purple-700 text-lg"
          }
        >
          Store
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive
              ? activeClass
              : "block text-gray-700 hover:text-purple-700 text-lg"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? activeClass
              : "block text-gray-700 hover:text-purple-700 text-lg"
          }
        >
          Contact
        </NavLink>

        {isAuthenticated ? (
          <>
            <Link to="/hotels">
              <button className="w-full bg-purple-700 text-white text-lg py-2 rounded-xl hover:bg-purple-600">
                Book Now
              </button>
            </Link>
            <button
              onClick={logout}
              className="w-full text-purple-700 text-lg py-2 border border-purple-700 rounded-xl hover:bg-purple-50"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="w-full text-purple-700 text-lg py-2 border border-purple-700 rounded-xl hover:bg-purple-50">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="w-full text-white text-lg py-2 bg-purple-500 rounded-xl hover:bg-purple-600">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
