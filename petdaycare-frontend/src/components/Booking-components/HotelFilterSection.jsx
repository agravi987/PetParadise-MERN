import React, { useState, useEffect } from "react";

const HotelFilterSection = ({ hotels, setFilteredHotels }) => {
  const [filters, setFilters] = useState({
    searchQuery: "",
    costRange: "",
    service: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    let results = [...hotels];

    // Search filter
    if (filters.searchQuery) {
      results = results.filter(
        (hotel) =>
          hotel.name
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase()) ||
          hotel.address
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase())
      );
    }

    // Service filter
    if (filters.service) {
      results = results.filter((hotel) =>
        hotel.services.includes(
          filters.service.charAt(0).toUpperCase() + filters.service.slice(1)
        )
      );
    }

    // Cost filter
    if (filters.costRange) {
      results.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));
        return filters.costRange === "low" ? priceA - priceB : priceB - priceA;
      });
    }

    setFilteredHotels(results);
  };

  const resetFilters = () => {
    setFilters({
      searchQuery: "",
      costRange: "",
      service: "",
    });
    setFilteredHotels(hotels);
  };

  // Auto-apply filters when any filter changes
  useEffect(() => {
    applyFilters();
  }, [filters]); // Runs whenever filters change

  return (
    <section className="bg-purple-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-purple-900 mb-6 text-center">
          Find the Best Pet Hotels & Daycare Centers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="searchQuery"
            placeholder="Search by name or location"
            className="px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500"
            value={filters.searchQuery}
            onChange={handleInputChange}
          />

          <select
            name="costRange"
            className="px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500"
            value={filters.costRange}
            onChange={handleInputChange}
          >
            <option value="">Cost Range</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>

          <select
            name="service"
            className="px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500"
            value={filters.service}
            onChange={handleInputChange}
          >
            <option value="">Select Services</option>
            <option value="boarding">Boarding</option>
            <option value="grooming">Grooming</option>
            <option value="training">Training</option>
          </select>

          {/* <button
            className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
            onClick={applyFilters}
          >
            Search
          </button> */}

          <button
            onClick={resetFilters}
            className="text-purple-700 px-4 py-2 border border-purple-300 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotelFilterSection;
