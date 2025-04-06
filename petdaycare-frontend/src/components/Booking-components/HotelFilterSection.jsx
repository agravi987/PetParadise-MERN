import React from "react";

const HotelFilterSection = () => {
  return (
    <section className="bg-purple-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-purple-900 mb-6 text-center">
          Find the Best Pet Hotels & Daycare Centers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by name or location"
            className="px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500"
          />

          {/* Cost Filter */}
          <select className="px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500">
            <option value="">Cost Range</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>

          {/* Services Filter */}
          <select className="px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500">
            <option value="">Select Services</option>
            <option value="boarding">Boarding</option>
            <option value="grooming">Grooming</option>
            <option value="training">Training</option>
          </select>

          {/* Button */}
          <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotelFilterSection;
