import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Footer Column 1: Logo */}
          <div className="text-center md:text-left">
            <div className="footer__logo">
              <a href="#" className="text-2xl font-bold text-purple-700">
                Pet Paradise
              </a>
            </div>
          </div>

          {/* Footer Column 2: Company Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-purple-900">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Faq
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 3: Address & Inquiries */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-purple-900">Address</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  New Delhi, India
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  View on Maps
                </a>
              </li>
            </ul>
            <br />
            <h4 className="text-lg font-semibold text-purple-900">Inquiries</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  +91 0987654321
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  info@website.com
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 4: Newsletter & Social Media */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-purple-900">
              Newsletter
            </h4>
            <p className="text-gray-600 mt-4">
              Stay updated with our latest news
            </p>
            <form className="mt-4 flex items-center">
              <input
                type="text"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-purple-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-700 text-white px-4 py-2 rounded-r-lg hover:bg-purple-600 transition duration-300"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </form>
            <br />
            <h4 className="text-lg font-semibold text-purple-900">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-purple-700 hover:text-purple-500">
                <i className="ri-facebook-fill text-2xl"></i>
              </a>
              <a href="#" className="text-purple-700 hover:text-purple-500">
                <i className="ri-twitter-fill text-2xl"></i>
              </a>
              <a href="#" className="text-purple-700 hover:text-purple-500">
                <i className="ri-youtube-fill text-2xl"></i>
              </a>
              <a href="#" className="text-purple-700 hover:text-purple-500">
                <i className="ri-pinterest-line text-2xl"></i>
              </a>
              <a href="#" className="text-purple-700 hover:text-purple-500">
                <i className="ri-instagram-line text-2xl"></i>
              </a>
              <a href="#" className="text-purple-700 hover:text-purple-500">
                <i className="ri-tiktok-fill text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="text-center mt-12 border-t border-gray-200 pt-8">
          <p className="text-gray-500">
            Copyright © 2024 pet paradise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
