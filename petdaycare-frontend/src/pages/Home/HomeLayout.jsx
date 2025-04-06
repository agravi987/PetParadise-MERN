import React from "react";

import Navbar from "../../components/home-components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/home-components/Footer";

function HomeLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeLayout;
