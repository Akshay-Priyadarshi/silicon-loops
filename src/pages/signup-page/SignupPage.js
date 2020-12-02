import React, { useEffect } from "react";
import "./SignupPage.css";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as LockIcon } from "../../assets/padlock.svg";
import githubIcon from "../../assets/github-colored.svg";
import googleIcon from "../../assets/google-colored.svg";
import facebookIcon from "../../assets/facebook-colored.svg";
import { Link } from "react-router-dom";
import gsap from "gsap";

function SignupPage() {
  useEffect(() => {
    gsap.to(".signup-page-main", {
      opacity: 1,
      duration: 0.8,
      ease: "power1.inOut",
    });
    const beepAnimation = gsap.timeline({ repeat: -1 });
    beepAnimation
      .to(".signup-page-arrow-icon", {
        opacity: 0,
        duration: 0.5,
        ease: "power1.in",
      })
      .to(".signup-page-arrow-icon", {
        opacity: 1,
        duration: 0.5,
        ease: "power1.in",
      });

    beepAnimation.play();
  }, []);

  return (
    <div id="signup-page" className="signup-page-main">
      <h1 className="signup-page-heading">JOIN</h1>
      <div className="signup-page-form">
        <div className="signup-page-email">
          <div className="signup-page-email-icon">
            <EmailIcon
              className="signup-page-email-icon-img"
              alt="signup-page-email-img"
            />
          </div>
          <input
            type="email"
            className="signup-page-email-field"
            placeholder="email"
          />
        </div>
        <div className="signup-page-password">
          <div className="signup-page-password-icon">
            <LockIcon
              className="signup-page-password-icon-img"
              alt="signup-page-password-img"
            />
          </div>
          <input
            type="password"
            className="signup-page-password-field"
            placeholder="password"
          />
        </div>
        <div className="signup-page-password">
          <div className="signup-page-password-icon">
            <LockIcon
              className="signup-page-password-icon-img"
              alt="signup-page-password-img"
            />
          </div>
          <input
            type="password"
            className="signup-page-password-field"
            placeholder="confirm password"
          />
        </div>
        <button className="signup-page-btn">
          signup
          <span>
            <ArrowIcon
              alt="signup-page-arrow"
              className="signup-page-arrow-icon"
            />
          </span>
        </button>

        <p>forgot password?</p>
        <p>or connect with</p>
        <div className="signup-page-social-icons-container">
          <img
            src={githubIcon}
            alt="github"
            className="signup-page-social-icon"
          />
          <img
            src={facebookIcon}
            alt="facebook"
            className="signup-page-social-icon"
          />
          <img
            src={googleIcon}
            alt="google"
            className="signup-page-social-icon"
          />
        </div>
        <Link to="/login">
          <p class="signup-page-bold-text">
            already have an account. login here
            <span>
              <ArrowIcon className="signup-page-arrow-icon" />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;
