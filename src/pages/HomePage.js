import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";

import "../App.css";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};

export default HomePage;
