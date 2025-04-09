import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, CheckCircle, Star } from "lucide-react";

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const hotel = location.state?.hotel;

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");

  const images = [hotel?.image1, hotel?.image2, hotel?.image3].filter(Boolean);

  if (!hotel) {
    return (
      <div className="text-center py-20 text-purple-800 font-semibold text-xl">
        Loading hotel details...
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill={i < rating ? "#FBBF24" : "none"}
        />
      );
    }
    return <div className="flex space-x-1">{stars}</div>;
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "" && newName.trim() !== "") {
      setComments([...comments, { name: newName, comment: newComment }]);
      setNewComment("");
      setNewName("");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-10 px-4 sm:px-8 font-sans">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-900 leading-tight">
          Explore Luxury & Comfort
        </h1>
        <p className="text-gray-700 mt-3 text-lg">
          Find your perfect stay with ease and elegance.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left (Hotel Details) */}
        <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-2xl bg-white">
          <div className="relative">
            <div className="overflow-hidden h-72 sm:h-96">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-6 left-6 bg-purple-700 text-white text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg">
              {hotel.location || "Top Rated"}
            </div>
            <button
              onClick={() => navigate(-1)}
              className="absolute top-6 right-6 bg-white/90 hover:bg-white rounded-full p-2 shadow-md"
            >
              <ArrowLeft className="w-5 h-5 text-purple-800" />
            </button>
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-gray-900">{hotel.name}</h2>
              {renderStars(hotel.rating || 4)}
            </div>

            <div className="flex flex-wrap items-center text-gray-600 text-sm mb-6 space-x-6">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> {hotel.address}
              </div>
              {hotel.contact && (
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" /> {hotel.contact}
                </div>
              )}
            </div>

            <div className="flex items-center text-green-600 text-base mb-6">
              <CheckCircle className="w-5 h-5 mr-2" /> Available for Booking
            </div>

            {images.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {images.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-60 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 space-y-5 text-gray-700 text-base sm:text-lg">
              <p>
                💰 <strong>Price:</strong> {hotel.price}
              </p>
              <p>
                🛎️ <strong>Services:</strong> {hotel.services?.join(", ")}
              </p>
              {hotel.timings && (
                <p>
                  🕒 <strong>Timings:</strong> {hotel.timings}
                </p>
              )}
              {hotel.description && (
                <p className="pt-2 text-gray-600 text-base leading-relaxed">
                  {hotel.description}
                </p>
              )}
            </div>

            <div className="pt-10 flex justify-center">
              <button
                onClick={() =>
                  navigate(`/hotels/${hotel.id}/book`, { state: { hotel } })
                }
                className="w-full sm:w-64 py-4 bg-purple-700 hover:bg-purple-800 text-white text-lg rounded-full transition duration-300 shadow-md"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-10">
          {/* Location */}
          <div className="bg-white p-6 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Location
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d125319.4849536857!2d76.9750214!3d11.0210694!3m2!1i1024!2i768!4f13.1!2m1!1spet%20center%20locations!5e0!3m2!1sen!2sin!4v1744049701846!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>

          {/* Reviews */}
          <div className="bg-white p-6 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Reviews
            </h3>
            <div className="space-y-6">
              {[
                {
                  name: "Sofia L",
                  comment:
                    "Amazing experience! Rooms were spotless and service top-notch.",
                },
                {
                  name: "Kim Jong",
                  comment: "Loved the amenities and prime location.",
                },
                {
                  name: "Jungkook",
                  comment: "Exceptional stay, cozy rooms, and friendly staff.",
                },
              ]
                .concat(comments)
                .map((review, idx) => (
                  <div
                    key={idx}
                    className="bg-purple-50 p-4 rounded-xl shadow-sm"
                  >
                    <p className="font-semibold text-purple-800">
                      {review.name}
                    </p>
                    <p className="text-gray-700 italic">"{review.comment}"</p>
                  </div>
                ))}
            </div>

            <form className="mt-8 space-y-4" onSubmit={handleCommentSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full border border-purple-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <textarea
                placeholder="Share your experience..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full border border-purple-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none min-h-[120px]"
              />
              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-full font-semibold shadow-md transition"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;
