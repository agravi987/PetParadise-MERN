import React, { useState } from "react";
import ProductCard from "./storeComponents/ProductCard";
import ProductFilter from "./storeComponents/ProductFilter";
import products from "./storeComponents/productsData";

const StoreSection = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filters) => {
    let results = [...products];

    // Search filter
    if (filters.search) {
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(filters.search.toLowerCase())
      );
    }

    // Category filter
    if (filters.category !== "all") {
      results = results.filter(
        (product) => product.category === filters.category
      );
    }

    // Sort filter
    if (filters.sort === "price-low") {
      results.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
        return priceA - priceB;
      });
    } else if (filters.sort === "price-high") {
      results.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
        return priceB - priceA;
      });
    }

    setFilteredProducts(results);
  };

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-lg font-medium">Products</p>
        <h2 className="text-4xl font-semibold text-purple-900 mt-2">
          Featured pet products
        </h2>

        <ProductFilter onFilterChange={handleFilterChange} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-600 text-lg">
                No products match your filters. Try adjusting your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
