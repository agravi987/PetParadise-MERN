import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h4 className="text-xl font-semibold text-purple-900">{product.name}</h4>
      <p className="text-gray-600 mt-2 min-h-[60px]">{product.description}</p>
      <h3 className="text-xl font-bold text-purple-900 mt-4">
        {product.price}
      </h3>
      <button className="mt-4 bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-300 w-full">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
