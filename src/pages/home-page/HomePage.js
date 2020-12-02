import React, { useEffect, useRef } from "react";
import "./HomePage.css";
import HeroSection from "./hero-section/HeroSection";
import Mission1Section from "./mission1-section/Mission1Section";
import Mission2Section from "./mission2-section/Mission2Section";
import ContactSection from "./contact-section/ContactSection";

function HomePage() {
  const homePageMain = useRef(null);

  return (
    <div id="homepage" ref={homePageMain} className="home-page-main">
      <HeroSection />
      <Mission1Section />
      <Mission2Section />
      <ContactSection />
    </div>
  );
}

export default HomePage;
