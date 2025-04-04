import React from "react";
import Intro1Image from "../../assets/intro-1.png";
import Intro2Image from "../../assets/intro-2.png";
import Intro3Image from "../../assets/intro-3.png";

const IntroSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-lg font-medium">Intro</p>
        <h2 className="text-4xl font-semibold text-purple-900 mt-2">
          Get to know us more
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Intro Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-purple-100 p-8 rounded-full inline-block">
              <img
                src={Intro1Image}
                alt="intro"
                className="w-20 h-20 mx-auto"
              />
            </div>
            <h4 className="text-xl font-semibold text-purple-900 mt-4">
              Pet Experts
            </h4>
            <p className="text-gray-600 mt-2">
              Meet our team of skilled veterinarians, dedicated to your pet's
              well-being.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-purple-700 border border-purple-700 px-6 py-2 rounded-full hover:bg-purple-700 hover:text-white transition duration-300"
            >
              Read More
            </a>
          </div>

          {/* Intro Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 p-8 rounded-full inline-block">
              <img
                src={Intro2Image}
                alt="intro"
                className="w-20 h-20 mx-auto"
              />
            </div>
            <h4 className="text-xl font-semibold text-purple-900 mt-4">
              Vet Services
            </h4>
            <p className="text-gray-600 mt-2">
              Offering a wide range of veterinary services to keep your pets
              healthy and happy.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-blue-700 border border-blue-700 px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition duration-300"
            >
              Read More
            </a>
          </div>

          {/* Intro Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-pink-100 p-8 rounded-full inline-block">
              <img
                src={Intro3Image}
                alt="intro"
                className="w-20 h-20 mx-auto"
              />
            </div>
            <h4 className="text-xl font-semibold text-purple-900 mt-4">
              Contact Us
            </h4>
            <p className="text-gray-600 mt-2">
              Reach out to us for any inquiries or schedule an appointment for
              your pet's care.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-pink-700 border border-pink-700 px-6 py-2 rounded-full hover:bg-pink-700 hover:text-white transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
