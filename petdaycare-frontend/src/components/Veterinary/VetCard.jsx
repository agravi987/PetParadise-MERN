import { useState } from "react";
import { RiStarFill, RiMapPinLine, RiCalendarLine } from "react-icons/ri";
import VetBookingModal from "./VetBookingModal";

const VetCard = ({ vet }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={vet.image}
        alt={vet.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{vet.name}</h3>
          <div className="flex items-center bg-purple-100 px-2 py-1 rounded">
            <RiStarFill className="text-yellow-500 mr-1" />
            <span>{vet.rating}</span>
          </div>
        </div>

        <div className="flex items-center mt-2 text-gray-600">
          <RiMapPinLine className="mr-1" />
          <span>{vet.address}</span>
        </div>

        <div className="mt-3">
          <h4 className="font-semibold">Specialties:</h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {vet.specialties.map((spec, i) => (
              <span
                key={i}
                className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">
              <RiCalendarLine className="inline mr-1" />
              {vet.availableSlots} slots available
            </p>
            <p className="text-lg font-bold mt-1">
              Consultation: ₹{vet.consultationFee}
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Book Now
          </button>
        </div>
      </div>

      {showModal && (
        <VetBookingModal vet={vet} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default VetCard;
