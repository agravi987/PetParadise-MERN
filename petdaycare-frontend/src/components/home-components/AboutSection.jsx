import React from "react";
import About1Image from "../../assets/about-1.jpg";
import About1Icon from "../../assets/about-1-icon.png";
import About2Image from "../../assets/about-2.jpg";
import About2Icon from "../../assets/about-2-icon.png";
import About3Image from "../../assets/about-3.jpg";
import About3Icon from "../../assets/about-3-icon.png";

const AboutSection = () => {
  return (
    <section className="py-8 bg-purple-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-lg font-medium">About Us</p>
        <h2 className="text-4xl font-semibold text-purple-900 mt-2">
          What we can do for you
        </h2>

        {/* About Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
          <div className="w-full md:w-1/2">
            <img
              src={About1Image}
              alt="about"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto md:mx-0">
              <img src={About1Icon} alt="about-icon" className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-semibold text-purple-900 mt-4">
              Let us help you with your pet health
            </h4>
            <p className="text-gray-600 mt-2">
              Our expert veterinarians are here to provide comprehensive care
              and guidance to ensure your pet stays in perfect health.
            </p>
          </div>
        </div>

        {/* About Row 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
          <div className="w-full md:w-1/2 text-left order-2 md:order-1">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto md:mx-0">
              <img src={About2Icon} alt="about-icon" className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-semibold text-purple-900 mt-4">
              Caring personal will take care of your pet
            </h4>
            <p className="text-gray-600 mt-2">
              Your pet will be in good hands with our compassionate and
              well-trained staff, who treat every pet like family.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src={About2Image}
              alt="about"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* About Row 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
          <div className="w-full md:w-1/2">
            <img
              src={About3Image}
              alt="about"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto md:mx-0">
              <img src={About3Icon} alt="about-icon" className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-semibold text-purple-900 mt-4">
              Let us groom your precious and loved pet
            </h4>
            <p className="text-gray-600 mt-2">
              From bathing to styling, we offer professional grooming services
              to keep your pet looking and feeling their best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
