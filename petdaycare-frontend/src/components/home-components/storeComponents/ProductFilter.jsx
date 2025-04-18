import React, { useState } from "react";

const ProductFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    sort: "default",
  });

  const categories = [
    "all",
    "food",
    "accessories",
    "toys",
    "grooming",
    "furniture",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        name="search"
        placeholder="Search products..."
        className="px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500"
        value={filters.search}
        onChange={handleChange}
      />

      <select
        name="category"
        className="px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500"
        value={filters.category}
        onChange={handleChange}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      <select
        name="sort"
        className="px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500"
        value={filters.sort}
        onChange={handleChange}
      >
        <option value="default">Default Sorting</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default ProductFilter;
