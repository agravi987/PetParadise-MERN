import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const VetBookingModal = ({ vet, onClose }) => {
  const [formData, setFormData] = useState({
    petName: "",
    petType: "dog",
    symptoms: "",
    date: "",
    time: "",
    consultationType: "clinic", // or 'video'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic (API call)
    alert(`Booking confirmed with ${vet.name} for ${formData.date}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold">Book Appointment</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <RiCloseLine size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pet Name
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-md"
              value={formData.petName}
              onChange={(e) =>
                setFormData({ ...formData, petName: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pet Type
              </label>
              <select
                className="w-full p-2 border rounded-md"
                value={formData.petType}
                onChange={(e) =>
                  setFormData({ ...formData, petType: e.target.value })
                }
              >
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Consultation Type
              </label>
              <select
                className="w-full p-2 border rounded-md"
                value={formData.consultationType}
                onChange={(e) =>
                  setFormData({ ...formData, consultationType: e.target.value })
                }
              >
                <option value="clinic">Clinic Visit</option>
                <option value="video">Video Consultation</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Symptoms (Optional)
            </label>
            <textarea
              className="w-full p-2 border rounded-md"
              rows="3"
              placeholder="Describe your pet's symptoms"
              value={formData.symptoms}
              onChange={(e) =>
                setFormData({ ...formData, symptoms: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                required
                className="w-full p-2 border rounded-md"
                min={new Date().toISOString().split("T")[0]}
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time Slot
              </label>
              <select
                required
                className="w-full p-2 border rounded-md"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              >
                <option value="">Select Time</option>
                {vet.availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Confirm Booking (₹{vet.consultationFee})
          </button>
        </form>
      </div>
    </div>
  );
};

export default VetBookingModal;
