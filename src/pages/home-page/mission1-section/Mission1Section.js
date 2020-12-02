import React from "react";
import "./Mission1Section.css";
import bg from "../../../assets/mission1bg.jpg";

function Mission1Section() {
  return (
    <div id="homepage-mission1" className="mission-section1-main">
      <img className="mission-section1-bg-img" src={bg} alt="bg" />
      <div className="mission-section1-bg">
        <p className="mission-section1-heading">
          stay in loop with friends &amp; professors.
        </p>
        <p className="mission-section1-para">
          we are trying our best to help build a loop where our students can
          stay in touch from the day they start with us. are you with us in our
          initiative ?
        </p>
      </div>
    </div>
  );
}

export default Mission1Section;
