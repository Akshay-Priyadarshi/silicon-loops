import React from "react";
import "./PageNotFound.css";
import notFound from "../../assets/undraw_page_not_found.svg";
import { ReactComponent as BackArrow } from "../../assets/arrow.svg";

function PageNotFound(props) {
  console.log(props);
  return (
    <div className="page-not-found-main">
      <h1 className="page-not-found-heading">page not found.</h1>
      <div className="page-not-found-container">
        <img
          className="page-not-found-img"
          src={notFound}
          alt="page-not-found"
        />
      </div>
      <button
        className="page-not-found-btn"
        onClick={() => window.history.back()}
      >
        <span>
          <BackArrow className="page-not-found-back-arrow-icon" />
        </span>
        back
      </button>
    </div>
  );
}

export default PageNotFound;
