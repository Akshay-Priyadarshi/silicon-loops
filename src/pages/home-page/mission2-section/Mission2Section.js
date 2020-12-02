import React from "react";
import "./Mission2Section.css";
import missionSection2Banner from "../../../assets/undraw_career_progress_ivdb.svg";

function Mission2Section() {
  return (
    <div id="homepage-mission2" className="mission-section2-main">
      <img
        className="mission-section2-img"
        src={missionSection2Banner}
        alt="success"
      />
      <div className="mission-section2-content">
        <p className="mission-section2-heading">
          your seniors are there to help.
        </p>
        <p className="mission-section2-para">
          the alumni network of a college is its backbone. passouts can easily
          get referral from their seniors and get placed.
        </p>
        <p className="mission-section2-para">
          students can easily filter out whoever matters to them and ask for
          help without any hassle.
        </p>
      </div>
    </div>
  );
}

export default Mission2Section;
