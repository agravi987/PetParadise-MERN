import React from "react";
import HotelCard from "./HotelCard";
import { Star } from "lucide-react";

const HotelCardsSection = ({ hotels }) => {
  const variants = ["one", "two", "three"];

  const renderStars = (rating) => {
    const stars = [];
    const roundedRating = Math.round(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={`${
            i < roundedRating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill={i < roundedRating ? "#facc15" : "none"}
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-purple-900 mb-6">
          Available Pet Hotels & Daycares
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className="border rounded-2xl p-4 shadow-md hover:shadow-lg transition"
            >
              <HotelCard
                hotel={hotel}
                variant={variants[index % variants.length]}
              />

              <div className="flex items-center mt-4">
                {renderStars(hotel.rating)}
                <span className="text-gray-600 text-sm ml-2">
                  {hotel.rating} ({hotel.reviews} reviews)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelCardsSection;
