import React, { useState, useEffect } from "react";
import HotelFilterSection from "../../components/Booking-components/HotelFilterSection";
import HotelCardsSection from "../../components/Booking-components/HotelCardsSection";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const hotelsData = [
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

  {
    id: 4,
    name: "Paw Palace Resort",
    address: "101 Golden Retriever Road, Mumbai",
    price: "₹1500/night",
    rating: 4.9,
    reviews: 180,
    services: ["Boarding", "Grooming", "Swimming"],
    image:
      "https://unsplash.com/photos/a-dog-with-sunglasses-on-its-head-playing-with-a-tennis-ball-tIegPW2u3kk",
    image1:
      "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwZGF5Y2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwcmVzb3J0fGVufDB8fDB8fHww",
    image3:
      "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nJTIwcmVzb3J0fGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Meow Mansion",
    address: "202 Persian Lane, Delhi",
    price: "₹1300/night",
    rating: 4.7,
    reviews: 95,
    services: ["Boarding", "Grooming", "Play Area"],
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
    image1:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
    image2:
      "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
    image3:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdCUyMGhvdGVsfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "Bark & Stay Luxury",
    address: "303 Labrador Boulevard, Bengaluru",
    price: "₹2200/night",
    rating: 4.8,
    reviews: 210,
    services: ["Boarding", "Training", "Spa", "Swimming"],
    image:
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nJTIwbHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
    image1:
      "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZyUyMGhvdGVsfGVufDB8fDB8fHww",
    image2:
      "https://images.unsplash.com/photo-1554692936-82776f9406c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZyUyMGhvdGVsfGVufDB8fDB8fHww",
    image3:
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZyUyMGhvdGVsfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    name: "Purradise Cat Hotel",
    address: "404 Siamese Street, Pune",
    price: "₹1100/night",
    rating: 4.6,
    reviews: 78,
    services: ["Boarding", "Grooming", "Play Area"],
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYm9hcmRpbmd8ZW58MHx8MHx8fDA%3D",
    image1:
      "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwYm9hcmRpbmd8ZW58MHx8MHx8fDA%3D",
    image2:
      "https://images.unsplash.com/photo-1530391277665-49655f7b0b90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdCUyMGJvYXJkaW5nfGVufDB8fDB8fHww",
    image3:
      "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdCUyMGJvYXJkaW5nfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    name: "Doggy Dynasty",
    address: "505 Beagle Lane, Hyderabad",
    price: "₹1800/night",
    rating: 4.4,
    reviews: 150,
    services: ["Boarding", "Training", "Daycare"],
    image:
      "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZyUyMGhvdGVsfGVufDB8fDB8fHww",
    image1:
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZyUyMGhvdGVsfGVufDB8fDB8fHww",
    image2:
      "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZyUyMGhvdGVsfGVufDB8fDB8fHww",
    image3:
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvZyUyMGhvdGVsfGVufDB8fDB8fHww",
  },
];

function HotelBooking() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [filteredHotels, setFilteredHotels] = useState(hotelsData);

  useEffect(() => {
    if (!isAuthenticated) {
      alert("Please log in to access hotel booking.");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div>
      <HotelFilterSection
        hotels={hotelsData}
        setFilteredHotels={setFilteredHotels}
      />
      <HotelCardsSection hotels={filteredHotels} />
    </div>
  );
}

export default HotelBooking;
