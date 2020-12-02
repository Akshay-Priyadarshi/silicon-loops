import React, { useEffect } from "react";
import "./HeroSection.css";
import connected from "../../../assets/undraw_connected_world_wuay.svg";
import gsap from "gsap";
import { Link } from "react-router-dom";

function HeroSection() {
  useEffect(() => {
    const textAnimation = gsap.from(".initial-hero-text-animation", {
      y: -15,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      delay: 0.2,
    });
    const buttonAnimation = gsap.from(".initial-hero-btn-animation", {
      x: -20,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      delay: 0.2,
    });
    textAnimation.play();
    buttonAnimation.play();
  }, []);

  return (
    <div id="homepage-hero" className="hero-section-main">
      <p className="hero-section-bg-text">about</p>
      <div className="hero-section-content-left">
        <p className="hero-section-heading initial-hero-text-animation">
          stay looped.
        </p>
        <p className="hero-section-para initial-hero-text-animation">
          silicon loops is an initiative by sit bbsr. the prime objective of
          this initiative is to help folks stay connected with their friends and
          professors.
        </p>
        <p className="hero-section-para initial-hero-text-animation">
          we aim to build a community where we can help each other &amp; grow as
          a team.
        </p>
        <Link to="/signup">
          <button className="hero-section-cta-btn initial-hero-btn-animation">
            JOIN TODAY
          </button>
        </Link>
      </div>
      <div className="hero-section-content-right">
        <img
          className="hero-section-world-img"
          src={connected}
          alt="Connected World"
        />
      </div>
    </div>
  );
}

export default HeroSection;
