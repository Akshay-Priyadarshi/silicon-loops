import React, { useRef } from "react";
import "./HomeHeader.css";
import { ReactComponent as MenuBtn } from "../../assets/menu.svg";
import logoWithText from "../../assets/logo/logo-with-text-light.svg";
import useDataLayerValue from "../../store/dataLayer";
import { openMobileMenu } from "../../store/actionConstants";

function HomeHeader() {
  const menuContainer = useRef();
  const [{ mobileMenuOpen }, dispatch] = useDataLayerValue();

  const openMenu = () => {
    dispatch({
      type: openMobileMenu,
      payload: true,
    });
  };

  return (
    <div className="home-header-main">
      <img
        className="home-header-logo"
        src={logoWithText}
        alt="logo-with-text"
      />
      <div
        onClick={() => openMenu()}
        className="home-header-menu-btn-container"
      >
        <MenuBtn className="home-header-menu-btn" />
      </div>
      <div ref={menuContainer} className="home-header-menu-container">
        <p className="home-header-menu-item">about</p>
        <p className="home-header-menu-item">mission</p>
        <p className="home-header-menu-item home-header-menu-item-last">
          contact
        </p>
        <button className="home-header-menu-button">
          <span className="home-header-menu-button-text">login</span>
        </button>
        <button className="home-header-menu-button">
          <span className="home-header-menu-button-text">signup</span>
        </button>
      </div>
    </div>
  );
}

export default HomeHeader;
