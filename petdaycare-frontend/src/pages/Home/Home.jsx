import Navbar from "../../components/home-components/Navbar";
import Header from "../../components/home-components/Header";
import IntroSection from "../../components/home-components/IntroSection";
import AboutSection from "../../components/home-components/AboutSection";
import ServiceSection from "../../components/home-components/ServiceSection";
import StoreSection from "../../components/home-components/StoreSection";
import ClientSection from "../../components/home-components/ClientSection";
import InstagramSection from "../../components/home-components/InstagramSection";
import Footer from "../../components/home-components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <IntroSection />
      <AboutSection />
      <ServiceSection />
      <StoreSection />
      <ClientSection />
      <InstagramSection />
      <Footer />
    </>
  );
}
