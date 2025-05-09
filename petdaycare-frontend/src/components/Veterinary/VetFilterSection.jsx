import { useState } from "react";

const VetFilterSection = ({ vets, setFilteredVets }) => {
  const [filters, setFilters] = useState({
    location: "",
    specialty: "",
    availability: "all",
  });

  const handleFilter = () => {
    const filtered = vets.filter((vet) => {
      return (
        (filters.location === "" ||
          vet.address.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.specialty === "" ||
          vet.specialties.includes(filters.specialty)) &&
        (filters.availability === "all" ||
          (filters.availability === "available"
            ? vet.availableSlots > 0
            : true))
      );
    });
    setFilteredVets(filtered);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            placeholder="City or area"
            className="w-full p-2 border rounded-md"
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          />
        </div>

        {/* Specialty Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Specialty
          </label>
          <select
            className="w-full p-2 border rounded-md"
            onChange={(e) =>
              setFilters({ ...filters, specialty: e.target.value })
            }
          >
            <option value="">All Specialties</option>
            <option value="Surgery">Surgery</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Emergency">Emergency Care</option>
          </select>
        </div>

        {/* Availability Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Availability
          </label>
          <select
            className="w-full p-2 border rounded-md"
            onChange={(e) =>
              setFilters({ ...filters, availability: e.target.value })
            }
          >
            <option value="all">Show All</option>
            <option value="available">Available Today</option>
          </select>
        </div>
      </div>
      <button
        onClick={handleFilter}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default VetFilterSection;
