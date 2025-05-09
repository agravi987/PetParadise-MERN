import React from "react";
import Service1Image from "../../assets/service-1.png";
import Service2Image from "../../assets/service-2.png";
import Service3Image from "../../assets/service-3.png";
import Service4Image from "../../assets/service-4.png";
import Service5Image from "../../assets/service-5.png";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <section className="py-16 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-lg font-medium">Services</p>
        <h2 className="text-4xl font-semibold text-purple-900 mt-2">
          What we can do for you
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {/* Service Card 1 */}
          <Link to="/hotels">
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-64">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                <img src={Service1Image} alt="service" className="w-12 h-12" />
              </div>
              <p className="text-lg font-medium text-purple-900 mt-4">
                Book PetDaycares
              </p>
            </div>
          </Link>

          {/* Service Card 2 */}
          <Link to="/veterinary">
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-64">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                <img src={Service2Image} alt="service" className="w-12 h-12" />
              </div>
              <p className="text-lg font-medium text-purple-900 mt-4">
                Veterinary Services
              </p>
            </div>
            {/* Service Card 3 */}
          </Link>
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-64">
            <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
              <img src={Service3Image} alt="service" className="w-12 h-12" />
            </div>
            <p className="text-lg font-medium text-purple-900 mt-4">
              Nutrition Counseling
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-64">
            <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
              <img src={Service4Image} alt="service" className="w-12 h-12" />
            </div>
            <p className="text-lg font-medium text-purple-900 mt-4">
              Behavioral Consultation
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-64">
            <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
              <img src={Service5Image} alt="service" className="w-12 h-12" />
            </div>
            <p className="text-lg font-medium text-purple-900 mt-4">
              Pet Boarding Services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
