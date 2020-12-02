import React from "react";
import "./ContactSection.css";
import instagramIcon from "../../../assets/instagram-2.svg";
import facebookIcon from "../../../assets/facebook-2.svg";
import twitterIcon from "../../../assets/twitter-2.svg";

function ContactSection() {
  return (
    <div id="homepage-contact" className="contact-section-main">
      <p className="contact-section-heading">connect.</p>
      <div className="contact-section-icons-group">
        <img
          src={instagramIcon}
          className="contact-section-icon"
          alt="instagramIcon"
        />
        <img
          src={facebookIcon}
          className="contact-section-icon"
          alt="facebookIcon"
        />
        <img
          src={twitterIcon}
          className="contact-section-icon"
          alt="twitterIcon"
        />
      </div>
    </div>
  );
}

export default ContactSection;
