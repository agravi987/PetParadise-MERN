import React, { useEffect } from "react";
import HotelFilterSection from "../../components/Booking-components/HotelFilterSection";
import HotelCardsSection from "../../components/Booking-components/HotelCardsSection";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function HotelBooking() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("Please log in to access hotel booking.");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div>
      <HotelFilterSection />
      <HotelCardsSection />
    </div>
  );
}

export default HotelBooking;
