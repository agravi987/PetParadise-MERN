import React from "react";
import Product1Image from "../../assets/product-1.jpg";
import Product2Image from "../../assets/product-2.jpg";
import Product3Image from "../../assets/product-3.jpg";

const StoreSection = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-lg font-medium">Products</p>
        <h2 className="text-4xl font-semibold text-purple-900 mt-2">
          Featured pet products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Product Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={Product1Image}
              alt="product"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h4 className="text-xl font-semibold text-purple-900 mt-4">
              Dog Trash Bag
            </h4>
            <p className="text-gray-600 mt-2">
              Convenient and eco-friendly trash bags for easy pet waste
              disposal.
            </p>
            <h3 className="text-xl font-bold text-purple-900 mt-4">
              $29.00 USD
            </h3>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={Product2Image}
              alt="product"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h4 className="text-xl font-semibold text-purple-900 mt-4">
              Pet Accessories
            </h4>
            <p className="text-gray-600 mt-2">
              Explore our range of stylish and functional accessories for your
              furry friends.
            </p>
            <h3 className="text-xl font-bold text-purple-900 mt-4">
              $49.00 USD
            </h3>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={Product3Image}
              alt="product"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h4 className="text-xl font-semibold text-purple-900 mt-4">
              Dog Food
            </h4>
            <p className="text-gray-600 mt-2">
              Nutritious and delicious dog food to keep your pet healthy and
              happy.
            </p>
            <h3 className="text-xl font-bold text-purple-900 mt-4">
              $79.00 USD
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
