import React from "react";
import HotelCard from "./HotelCard";
import { Star } from "lucide-react"; // Lucide icons for nice star SVGs

const hotels = [
  {
    id: 1,
    name: "Cozy Paws Inn",
    address: "123 Bark Street, Pawtown",
    price: "₹800/night",
    rating: 4.5,
    reviews: 120, // Added a review count
    services: ["Boarding", "Grooming"],
    image:
      "https://images.unsplash.com/photo-1546977036-c2fa2cec49e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
    image1:
      "https://i.pinimg.com/236x/8c/f6/fa/8cf6fa32d0d9ed84892eb50f5c9112ba.jpg",
    image2:
      "https://i.pinimg.com/736x/5b/e3/75/5be37547bc687b587a176ef204e435be.jpg",
    image3:
      "https://media.istockphoto.com/id/639024502/photo/time-for-a-haircut.webp?a=1&b=1&s=612x612&w=0&k=20&c=7o8HNNE1lJR_fOiGp57iEoF_ppvUvQEQQ02O5ajmPzo=",
  },
  {
    id: 2,
    name: "Furry Friends Hotel",
    address: "456 Meow Avenue, Catcity",
    price: "₹1200/night",
    rating: 4.8,
    reviews: 200,
    services: ["Boarding", "Training", "Grooming"],
    image:
      "https://media.istockphoto.com/id/1253685765/photo/owner-pours-dry-food-to-the-cat-and-dog-in-the-kitchen-masters-hand-close-up-concept-dry-food.jpg?s=612x612&w=0&k=20&c=iIBNw9x_1-S6UDJfBnyHu0A9F0nfgD_mC787diBV_6A=",
    image1:
      "https://i.pinimg.com/736x/3f/04/e5/3f04e53366cf25daeed9f19b1ada3d43.jpg",
    image2:
      "https://i.pinimg.com/474x/e5/b2/d3/e5b2d326c4ee23a28c4db60f8a76e109.jpg",
    image3:
      "https://i.pinimg.com/236x/1f/25/f6/1f25f6243c3e247a6053848ed1c9d763.jpg",
  },
  {
    id: 3,
    name: "Whisker Wonderland",
    address: "789 Tail Lane, Petville",
    price: "₹950/night",
    rating: 4.2,
    reviews: 85,
    services: ["Boarding"],
    image:
      "https://media.istockphoto.com/id/1341957270/photo/food-and-accessories-for-the-dog-and-chihuahua-on-table.jpg?s=612x612&w=0&k=20&c=CRGbt9BAlnW1OxT-lLDHwxU2hPkqkXUH-veCd-PWWAA=",
    image1:
      "https://i.pinimg.com/736x/fe/26/15/fe2615df754c3c56d51823bb01b4a29a.jpg",
    image2:
      "https://i.pinimg.com/736x/3e/d9/25/3ed9257d14950bc288b1ce2a854b95d9.jpg",
    image3:
      "https://plus.unsplash.com/premium_photo-1661596424329-4af74e29081f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBldCUyMGhvdGVsfGVufDB8fDB8fHww",
  },
];

const HotelCardsSection = () => {
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

              {/* Ratings and reviews */}
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
