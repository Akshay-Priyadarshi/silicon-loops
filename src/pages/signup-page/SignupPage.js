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
import { useFormik } from "formik";
import {
  validateEmail,
  validatePassword,
  validatePasswordMatch,
} from "../../services/validations";
import { signUpWithEmail } from "../../services/authService";
import { useAlert } from "react-alert";
import customError from "../../services/customError";

function SignupPage(props) {
  const alert = useAlert();

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

  // initialValues parameter of Formik form
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  // onSubmit parameter of Formik form
  const onSubmit = async (values) => {
    const signupResponse = await signUpWithEmail(values.email, values.password);
    if (!signupResponse.errors) {
      console.log(signupResponse.data);
      props.history.push("/auth");
    } else {
      alert.error(customError(signupResponse.errors));
    }
  };

  // validate parameter of Formik form
  const validate = (values) => {
    let errors = {};

    // Email Validation
    if (!validateEmail(values.email)) {
      errors.email = "email is invalid";
    }

    // Password Validation
    if (!validatePassword(values.password)) {
      errors.password = "min 8! chars allowed-> a-z A-Z 0-9 - _ @ ";
    }

    // Password Match Validation
    if (!validatePasswordMatch(values.password, values.confirmPassword)) {
      errors.confirmPassword = "passwords don't match";
    }

    console.log(signupForm.isValid);
    return errors;
  };

  // Formik form initialization
  const signupForm = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div id="signup-page" className="signup-page-main">
      <h1 className="signup-page-heading">JOIN</h1>
      <form
        className="signup-page-form"
        onSubmit={signupForm.handleSubmit}
        autoComplete="off"
        noValidate
      >
        <div className="signup-page-email-box">
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
              name="email"
              value={signupForm.values.email}
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
            />
          </div>
          {signupForm.touched.email && signupForm.errors.email ? (
            <p className="signup-page-error">{signupForm.errors.email}</p>
          ) : null}
        </div>
        <div className="signup-page-password-box">
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
              name="password"
              value={signupForm.values.password}
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
            />
          </div>
          {signupForm.touched.password && signupForm.errors.password ? (
            <p className="signup-page-error">{signupForm.errors.password}</p>
          ) : null}
        </div>
        <div className="signup-page-password-box">
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
              name="confirmPassword"
              value={signupForm.values.confirmPassword}
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
            />
          </div>
          {signupForm.touched.confirmPassword &&
          signupForm.errors.confirmPassword ? (
            <p className="signup-page-error">
              {signupForm.errors.confirmPassword}
            </p>
          ) : null}
        </div>
        <button
          type="submit"
          className="signup-page-btn"
          disabled={!signupForm.dirty || !signupForm.isValid}
        >
          signup
          <span>
            <ArrowIcon
              alt="signup-page-arrow"
              className="signup-page-arrow-icon"
            />
          </span>
        </button>

        <p className="signup-page-texts">forgot password?</p>
        <p className="signup-page-texts">or connect with</p>
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
          <p className="signup-page-bold-text signup-page-texts">
            already have an account. login here
            <span>
              <ArrowIcon className="signup-page-arrow-icon" />
            </span>
          </p>
        </Link>
      </form>
    </div>
  );
}

export default SignupPage;
