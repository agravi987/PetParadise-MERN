import React from "react";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-purple-900">{hotel.name}</h3>
      <p className="text-gray-600 mt-1">{hotel.address}</p>
      <p className="text-purple-700 font-medium mt-2">{hotel.price}</p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => navigate(`/hotels/${hotel.id}`, { state: { hotel } })}
          className="px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-100"
        >
          View Details
        </button>
        <button
          onClick={() =>
            navigate(`/hotels/${hotel.id}/book`, { state: { hotel } })
          }
          className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
