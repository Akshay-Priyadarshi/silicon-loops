import React, { useEffect } from "react";
import "./LoginPage.css";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as LockIcon } from "../../assets/padlock.svg";
import githubIcon from "../../assets/github-colored.svg";
import googleIcon from "../../assets/google-colored.svg";
import facebookIcon from "../../assets/facebook-colored.svg";
import { Link } from "react-router-dom";
import gsap from "gsap";

function LoginPage() {
  useEffect(() => {
    gsap.to(".login-page-main", {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });
    const beepAnimation = gsap.timeline({ repeat: -1 });
    beepAnimation
      .to(".login-page-arrow-icon", {
        opacity: 0,
        duration: 0.8,
        ease: "power1.in",
      })
      .to(".login-page-arrow-icon", {
        opacity: 1,
        duration: 0.5,
        ease: "power1.in",
      });
    beepAnimation.play();
  }, []);

  return (
    <div id="login-page" className="login-page-main">
      <h1 className="login-page-heading">LOGIN</h1>
      <div className="login-page-form">
        <div className="login-page-email">
          <div className="login-page-email-icon">
            <EmailIcon
              className="login-page-email-icon-img"
              alt="login-page-email-img"
            />
          </div>
          <input
            type="email"
            className="login-page-email-field"
            placeholder="email"
          />
        </div>
        <div className="login-page-password">
          <div className="login-page-password-icon">
            <LockIcon
              className="login-page-password-icon-img"
              alt="login-page-password-img"
            />
          </div>
          <input
            type="password"
            className="login-page-password-field"
            placeholder="password"
          />
        </div>
        <button className="login-page-btn">
          login
          <span>
            <ArrowIcon
              alt="login-page-arrow"
              className="login-page-arrow-icon"
            />
          </span>
        </button>

        <p>forgot password?</p>
        <p>or connect with</p>
        <div className="login-page-social-icons-container">
          <img
            src={githubIcon}
            alt="github"
            className="login-page-social-icon"
          />
          <img
            src={facebookIcon}
            alt="facebook"
            className="login-page-social-icon"
          />
          <img
            src={googleIcon}
            alt="google"
            className="login-page-social-icon"
          />
        </div>
        <Link to="/signup">
          <p class="login-page-bold-text">
            new here? join the community
            <span>
              <ArrowIcon className="login-page-arrow-icon" />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}
export default LoginPage;
