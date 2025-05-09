import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import VetFilterSection from "../../components/Veterinary/VetFilterSection";
import VetCard from "../../components/Veterinary/VetCard";

const vetsData = [
  {
    id: 1,
    name: "Paws & Care Veterinary Hospital",
    address: "123 Pet Street, Mumbai",
    rating: 4.7,
    specialties: ["Surgery", "Dermatology"],
    availableSlots: 5,
    consultationFee: 800,
    availableTimes: ["10:00 AM", "2:00 PM", "4:30 PM"],
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
  },
  {
    id: 2,
    name: "Whisker Wellness Center",
    address: "456 Cat Lane, Delhi",
    rating: 4.5,
    specialties: ["Feline Medicine", "Nutrition"],
    availableSlots: 3,
    consultationFee: 750,
    availableTimes: ["9:30 AM", "1:00 PM", "3:45 PM"],
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  },
  {
    id: 3,
    name: "Golden Retriever Specialists",
    address: "789 Dog Boulevard, Bangalore",
    rating: 4.9,
    specialties: ["Breed-Specific Care", "Orthopedics"],
    availableSlots: 7,
    consultationFee: 1200,
    availableTimes: ["8:00 AM", "11:30 AM", "5:00 PM"],
    image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb",
  },
  {
    id: 4,
    name: "Avian & Exotic Pet Clinic",
    address: "101 Feather Road, Hyderabad",
    rating: 4.3,
    specialties: ["Birds", "Reptiles", "Small Mammals"],
    availableSlots: 4,
    consultationFee: 900,
    availableTimes: ["10:15 AM", "3:00 PM"],
    image: "https://images.unsplash.com/photo-1551085254-e96b210db58a",
  },
  {
    id: 5,
    name: "Emergency Pet Trauma Center",
    address: "202 Critical Care Circle, Pune",
    rating: 4.8,
    specialties: ["Emergency Care", "Critical Care"],
    availableSlots: 0, // Currently full
    consultationFee: 1500,
    availableTimes: ["24/7 Emergency"],
    image: "https://images.unsplash.com/photo-1575425186775-b8de9a427e67",
  },
  {
    id: 6,
    name: "Holistic Pet Healing",
    address: "303 Wellness Way, Chennai",
    rating: 4.6,
    specialties: ["Acupuncture", "Herbal Medicine"],
    availableSlots: 6,
    consultationFee: 1000,
    availableTimes: ["9:00 AM", "12:00 PM", "4:00 PM"],
    image: "https://images.unsplash.com/photo-1550256059-e8f8a249c80b",
  },
  {
    id: 7,
    name: "Senior Pet Care Clinic",
    address: "404 Elder Avenue, Kolkata",
    rating: 4.4,
    specialties: ["Geriatric Care", "Pain Management"],
    availableSlots: 2,
    consultationFee: 850,
    availableTimes: ["10:30 AM", "2:15 PM"],
    image: "https://images.unsplash.com/photo-1582456891955-9d9a1c9d9a1c",
  },
  {
    id: 8,
    name: "Puppy Preschool Clinic",
    address: "505 Training Trail, Jaipur",
    rating: 4.7,
    specialties: ["Pediatrics", "Vaccinations"],
    availableSlots: 8,
    consultationFee: 700,
    availableTimes: ["8:30 AM", "1:30 PM", "4:00 PM"],
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9",
  },
  {
    id: 9,
    name: "Aquatic Animal Hospital",
    address: "606 Coral Cove, Kochi",
    rating: 4.2,
    specialties: ["Fish", "Aquatic Turtles"],
    availableSlots: 3,
    consultationFee: 950,
    availableTimes: ["11:00 AM", "3:30 PM"],
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5",
  },
  {
    id: 10,
    name: "Pet Dental Specialists",
    address: "707 Tooth Terrace, Ahmedabad",
    rating: 4.9,
    specialties: ["Dentistry", "Oral Surgery"],
    availableSlots: 1,
    consultationFee: 1300,
    availableTimes: ["9:15 AM", "2:45 PM"],
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7",
  },
];

function VeterinaryBooking() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [filteredVets, setFilteredVets] = useState(vetsData);

  useEffect(() => {
    if (!isAuthenticated) {
      alert("Please log in to book veterinary services");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Veterinary Care</h1>

      <VetFilterSection vets={vetsData} setFilteredVets={setFilteredVets} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVets.map((vet) => (
          <VetCard key={vet.id} vet={vet} />
        ))}
      </div>
    </div>
  );
}

export default VeterinaryBooking;
