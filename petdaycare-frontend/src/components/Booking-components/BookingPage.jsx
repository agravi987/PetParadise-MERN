import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Optional: Lucide icon (nice and sharp)

const BookingPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const hotel = location.state?.hotel;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-1 text-purple-700 hover:text-purple-900 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-purple-900 text-center mb-6">
          Booking for {hotel?.name || "Hotel"}
        </h2>

        {/* Hotel Info */}
        <div className="mb-6 text-gray-700">
          <p>
            <strong>Location:</strong> {hotel?.address}
          </p>
          <p>
            <strong>Cost per night:</strong> ₹{hotel?.price}
          </p>
        </div>

        {/* Booking Form */}
        <form className="grid grid-cols-1 gap-6">
          {/* Pet Name */}
          <div>
            <label className="block text-sm font-medium text-purple-800 mb-1">
              Pet Name
            </label>
            <input
              type="text"
              placeholder="Enter your pet's name"
              className="w-full border border-purple-300 rounded-lg px-4 py-2"
            />
          </div>

          {/* Number of Days */}
          <div>
            <label className="block text-sm font-medium text-purple-800 mb-1">
              Number of Days
            </label>
            <input
              type="number"
              min="1"
              placeholder="e.g., 3"
              className="w-full border border-purple-300 rounded-lg px-4 py-2"
            />
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-sm font-medium text-purple-800 mb-1">
              Preferred Time
            </label>
            <input
              type="time"
              className="w-full border border-purple-300 rounded-lg px-4 py-2"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingPage;
