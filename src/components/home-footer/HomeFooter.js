import React from "react";
import "./HomeFooter.css";
import logoWithText from "../../assets/logo/logo-with-text-light.svg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function HomeFooter() {
  return (
    <div className="home-footer-section-main">
      <img
        className="home-footer-section-logo"
        src={logoWithText}
        alt="logo-with-text"
      />
      <div className="home-footer-section-content">
        <div className="home-footer-section-main-links-container">
          <Link to="/">
            <p
              onClick={() => {
                gsap.to(window, {
                  duration: 0.6,
                  scrollTo: { y: "#homepage-hero", offsetY: 50 },
                  ease: "power3.inOut",
                });
              }}
              className="home-footer-section-main-link"
            >
              home
            </p>
          </Link>
          <Link to="/">
            <p
              onClick={() => {
                gsap.to(window, {
                  duration: 0.6,
                  scrollTo: { y: "#homepage-contact", offsetY: 50 },
                  ease: "power3.inOut",
                });
              }}
              className="home-footer-section-main-link"
            >
              contact
            </p>
          </Link>
          <Link to="/">
            <p
              onClick={() => {
                gsap.to(window, {
                  duration: 0.6,
                  scrollTo: { y: "#homepage-mission1", offsetY: 50 },
                  ease: "power3.inOut",
                });
              }}
              className="home-footer-section-main-link"
            >
              mission
            </p>
          </Link>
          <Link to="/login">
            <p
              onClick={() => {
                gsap.to(window, {
                  duration: 0.6,
                  scrollTo: { y: "#login-page", offsetY: 100 },
                  ease: "power3.inOut",
                });
              }}
              className="home-footer-section-main-link"
            >
              login
            </p>
          </Link>
          <Link to="/signup">
            <p
              onClick={() => {
                gsap.to(window, {
                  duration: 0.6,
                  scrollTo: { y: "#signup-page", offsetY: 100 },
                  ease: "power3.inOut",
                });
              }}
              className="home-footer-section-main-link"
            >
              join
            </p>
          </Link>
          <Link to="/terms">
            <p
              onClick={() => {
                gsap.to(window, {
                  duration: 0.6,
                  scrollTo: { y: "#terms-of-service", offsetY: 50 },
                  ease: "power3.inOut",
                });
              }}
              className="home-footer-section-main-link"
            >
              terms
            </p>
          </Link>
          <Link to="/privacy-policy">
            <p
              onClick={() => {
                gsap.to(window, {
                  duration: 0.6,
                  scrollTo: { y: "#privacy-policy", offsetY: 50 },
                  ease: "power3.inOut",
                });
              }}
              className="home-footer-section-main-link"
            >
              privacy policy
            </p>
          </Link>
          <Link to="/disclaimer">
            <p
              onClick={() => {
                gsap.to(window, {
                  duration: 0.6,
                  scrollTo: { y: "#disclaimer", offsetY: 50 },
                  ease: "power3.inOut",
                });
              }}
              className="home-footer-section-main-link"
            >
              disclaimer
            </p>
          </Link>
        </div>
        <div className="home-footer-section-details">
          <div className="home-footer-section-part">
            <p className="home-footer-section-part-title">
              about silicon loops
            </p>
            <p className="home-footer-section-part-para">
              silicon loops is an effort by silicon institute of technology,
              bhubaneswar to make a platform for all the students as well as
              passouts so that all of us can stay in loop. Lets grow together
              and create a network of best engineers in India and abroad.
            </p>
          </div>
          <div className="home-footer-section-part">
            <p className="home-footer-section-part-title">
              🚀links you may folllow
            </p>
            <a href="https://www.silicon.ac.in/">
              <p className="home-footer-section-part-para">
                silicon bhubaneswar
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
