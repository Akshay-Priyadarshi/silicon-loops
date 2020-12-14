import React, { useEffect } from "react";
import "./MobileMenu.css";
import closeBtn from "../../assets/close.svg";
import useDataLayerValue from "../../store/dataLayer";
import { openMobileMenu, setTab, tabs } from "../../store/actionConstants";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { Link } from "react-router-dom";
import { logOut } from "../../services/authService";
gsap.registerPlugin(ScrollToPlugin);

function MobileMenu() {
  const [{ authUser }, dispatch] = useDataLayerValue();
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
          duration: 0.3,
          stagger: 0.1,
          ease: "power3.out",
          autoAlpha: 1,
        },
        "-=0.2"
      );
    mobileMenuAnimation.play();
  }, [mobileMenuAnimation]);

  const closeMobileMenu = async () => {
    await mobileMenuAnimation.reverse();
    dispatch({
      type: openMobileMenu,
      payload: false,
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
        {authUser ? (
          <Link to="/auth/account">
            <p
              className="mobile-menu-item"
              onClick={async () => {
                // gsap.to(window, {
                //   duration: 0.6,
                //   scrollTo: { y: "#homepage-contact", offsetY: 50 },
                //   ease: "power3.inOut",
                // });
                await closeMobileMenu();
                dispatch({ type: setTab, payload: tabs.a });
              }}
            >
              account
            </p>
          </Link>
        ) : null}
        {authUser ? null : (
          <Link to="/login">
            <p
              className="mobile-menu-item mobile-menu-feature-item"
              onClick={() => {
                closeMobileMenu();
                gsap.to(window, {
                  duration: 0.6,
                  scrollTo: { y: "#login-page", offsetY: 100 },
                  ease: "power3.inOut",
                });
              }}
            >
              login
            </p>
          </Link>
        )}
        {authUser ? null : (
          <Link to="/signup">
            <p
              className="mobile-menu-item mobile-menu-feature-item"
              onClick={() => {
                closeMobileMenu();
                gsap.to(window, {
                  duration: 0.6,
                  scrollTo: { y: "#signup-page", offsetY: 100 },
                  ease: "power3.inOut",
                });
              }}
            >
              signup
            </p>
          </Link>
        )}
        {authUser ? (
          <Link to="/login">
            <p
              className="mobile-menu-item mobile-menu-feature-item"
              onClick={async () => {
                await closeMobileMenu();
                dispatch({ type: setTab, payload: tabs.f });
                logOut();
              }}
            >
              logout
            </p>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default MobileMenu;
