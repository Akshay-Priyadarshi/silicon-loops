import React, { useEffect } from "react";
import "./MobileMenu.css";
import closeBtn from "../../assets/close.svg";
import useDataLayerValue from "../../store/dataLayer";
import { openMobileMenu } from "../../store/actionConstants";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollToPlugin);

function MobileMenu() {
  const [{ mobileMenuOpen }, dispatch] = useDataLayerValue();
  const mobileMenuAnimation = gsap.timeline({ paused: true });

  useEffect(() => {
    mobileMenuAnimation
      .from(".mobile-menu-container", {
        x: 200,
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
      })
      .from(
        ".mobile-menu-item, .mobile-menu-cross-btn",
        {
          y: 10,
          x: 30,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.2"
      );
    mobileMenuAnimation.play();
  }, []);

  const closeMobileMenu = () => {
    mobileMenuAnimation.reverse().then(() => {
      dispatch({
        type: openMobileMenu,
        payload: false,
      });
    });
  };

  return (
    <div className="mobile-menu-container">
      <img
        onClick={closeMobileMenu}
        className="mobile-menu-cross-btn"
        src={closeBtn}
        alt="menu-close-btn"
      />
      <div className="mobile-menu-item-container">
        <Link to="/">
          <p
            className="mobile-menu-item"
            onClick={() => {
              gsap.to(window, {
                duration: 0.6,
                scrollTo: { y: "#homepage-hero", offsetY: 50 },
                ease: "power3.inOut",
              });
              closeMobileMenu();
            }}
          >
            about
          </p>
        </Link>
        <Link to="/">
          <p
            className="mobile-menu-item"
            onClick={() => {
              gsap.to(window, {
                duration: 0.6,
                scrollTo: { y: "#homepage-mission1", offsetY: 50 },
                ease: "power3.inOut",
              });
              closeMobileMenu();
            }}
          >
            mission
          </p>
        </Link>
        <Link to="/">
          <p
            className="mobile-menu-item"
            onClick={() => {
              gsap.to(window, {
                duration: 0.6,
                scrollTo: { y: "#homepage-contact", offsetY: 50 },
                ease: "power3.inOut",
              });
              closeMobileMenu();
            }}
          >
            contact
          </p>
        </Link>
        <Link to="/login">
          <p
            className="mobile-menu-item mobile-menu-feature-item"
            onClick={closeMobileMenu}
          >
            login
          </p>
        </Link>
        <Link to="/signup">
          <p
            className="mobile-menu-item mobile-menu-feature-item"
            onClick={closeMobileMenu}
          >
            signup
          </p>
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
