import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import HomeLayout from "./pages/Home/HomeLayout";
import ServiceSection from "./components/home-components/ServiceSection";
import StoreSection from "./components/home-components/StoreSection";
import ContactSection from "./components/home-components/ContactSection";
import AboutPage from "./pages/Home/AboutPage";
import HotelBooking from "./pages/HotelBooking/HotelBooking";
import BookingPage from "./components/Booking-components/BookingPage";
import HotelDetails from "./components/Booking-components/HotelDetails";
import { AuthProvider } from "./contexts/AuthContext";
import Profile from "./pages/Home/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="service" element={<ServiceSection />} />
            <Route path="store" element={<StoreSection />} />
            <Route path="contact" element={<ContactSection />} />
            <Route path="hotels" element={<HotelBooking />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/hotels/:id/book" element={<BookingPage />} />
            <Route path="/hotels/:id" element={<HotelDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
