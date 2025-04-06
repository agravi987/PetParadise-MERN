import React from "react";
import HotelCard from "./HotelCard";

const hotels = [
  {
    id: 1,
    name: "Cozy Paws Inn",
    address: "123 Bark Street, Pawtown",
    price: "₹800/night",
    rating: 4.5,
    services: ["Boarding", "Grooming"],
    image:
      "https://media.istockphoto.com/id/639024502/photo/time-for-a-haircut.webp?a=1&b=1&s=612x612&w=0&k=20&c=7o8HNNE1lJR_fOiGp57iEoF_ppvUvQEQQ02O5ajmPzo=",
  },
  {
    id: 2,
    name: "Furry Friends Hotel",
    address: "456 Meow Avenue, Catcity",
    price: "₹1200/night",
    rating: 4.8,
    services: ["Boarding", "Training", "Grooming"],
    image:
      "https://plus.unsplash.com/premium_photo-1683141273422-1b1ef2ea8e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Whisker Wonderland",
    address: "789 Tail Lane, Petville",
    price: "₹950/night",
    rating: 4.2,
    services: ["Boarding"],
    image:
      "https://plus.unsplash.com/premium_photo-1661596424329-4af74e29081f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBldCUyMGhvdGVsfGVufDB8fDB8fHww",
  },
];

const HotelCardsSection = () => {
  const variants = ["one", "two", "three"];

  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-purple-900 mb-6">
          Available Pet Hotels & Daycares
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              variant={variants[index % variants.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelCardsSection;
