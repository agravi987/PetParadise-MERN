import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const hotel = location.state?.hotel;

  if (!hotel) {
    return (
      <div className="text-center py-20 text-purple-800 font-medium">
        Loading hotel details...
      </div>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-6 top-6 text-purple-700 hover:text-purple-900 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Hotel Image */}
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-72 object-cover rounded-xl"
          />

          {/* Hotel Info */}
          <div>
            <h2 className="text-3xl font-semibold text-purple-900 mb-4">
              {hotel.name}
            </h2>
            <p className="text-gray-700 mb-2">
              📍 <strong>Location:</strong> {hotel.address}
            </p>
            <p className="text-gray-700 mb-2">
              💰 <strong>Price:</strong> ₹{hotel.price}
            </p>
            <p className="text-gray-700 mb-2">
              🛎️ <strong>Services:</strong> {hotel.services.join(", ")}
            </p>
            <p className="text-gray-700 mb-2">
              🕒 <strong>Timings:</strong> {hotel.timings}
            </p>
            <p className="text-gray-700 mt-4">{hotel.description}</p>

            {/* Book Button */}
            <button
              onClick={() =>
                navigate(`/hotels/${hotel.id}/book`, { state: { hotel } })
              }
              className="mt-6 px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;
