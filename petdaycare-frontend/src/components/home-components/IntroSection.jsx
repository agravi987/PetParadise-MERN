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
          <IntroCard
            image={Intro1Image}
            title="Pet Experts"
            description="Meet our team of skilled veterinarians, dedicated to your pet's well-being."
            bgColor="bg-purple-100"
            buttonColor="text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white"
          />
          <IntroCard
            image={Intro2Image}
            title="Vet Services"
            description="Offering a wide range of veterinary services to keep your pets healthy and happy."
            bgColor="bg-blue-100"
            buttonColor="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white"
          />
          <IntroCard
            image={Intro3Image}
            title="Contact Us"
            description="Reach out to us for any inquiries or schedule an appointment for your pet's care."
            bgColor="bg-pink-100"
            buttonColor="text-pink-700 border border-pink-700 hover:bg-pink-700 hover:text-white"
          />
        </div>
      </div>
    </section>
  );
};

// Internal reusable component
const IntroCard = ({ image, title, description, buttonColor, bgColor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className={`p-8 rounded-full inline-block ${bgColor}`}>
        <img src={image} alt="intro" className="w-20 h-20 mx-auto" />
      </div>
      <h4 className="text-xl font-semibold text-purple-900 mt-4">{title}</h4>
      <p className="text-gray-600 mt-2">{description}</p>
      <a
        href="#"
        className={`inline-block mt-4 ${buttonColor} px-6 py-2 rounded-full transition duration-300`}
      >
        Read More
      </a>
    </div>
  );
};

export default IntroSection;
