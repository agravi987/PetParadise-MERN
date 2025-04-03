import React from "react";

const Header = () => {
  return (
    <header id="home" className="bg-purple-100 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Header Content */}
          <div className="text-center md:text-left">
            <h4 className="inline-block bg-opacity-10 text-purple-700 text-sm font-semibold px-4 py-1 rounded-full">
              Welcome
            </h4>
            <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mt-4">
              Pet
              <br />
              <span className="text-7xl md:text-8xl">Paradise</span>
            </h1>
            <h2 className="text-xl font-semibold text-purple-700 mt-4">
              We love pets like you do :)
            </h2>
            <p className="text-gray-600 mt-4 max-w-md mx-auto md:mx-0">
              From routine check-ups to specialized treatments, we're here to
              ensure your pets lead happy, healthy lives.
            </p>
            <div className="mt-6">
              <button className="bg-purple-700 text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto md:mx-0 hover:bg-purple-600 transition duration-300">
                Start Here!
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>

          {/* Header Image */}
          <div className="relative">
            <img
              src="../assets/header-bg.png"
              alt="header-bg"
              className="absolute top-1/2 left-0 transform -translate-y-1/2 w-72 opacity-50"
            />
            <img
              src="../assets/header.png"
              alt="header"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
