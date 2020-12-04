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
import { useFormik } from "formik";
import { validateEmail, validatePassword } from "../../services/validations";
import customError from "../../services/customError";
import { logInWithEmail } from "../../services/authService";
import { useAlert } from "react-alert";

function LoginPage(props) {
  const alert = useAlert();

  useEffect(() => {
    gsap.to(".login-page-main", {
      opacity: 1,
      duration: 0.8,
      ease: "power1.inOut",
    });
    const beepAnimation = gsap.timeline({ repeat: -1 });
    beepAnimation
      .to(".login-page-arrow-icon", {
        opacity: 0,
        duration: 0.5,
        ease: "power1.in",
      })
      .to(".login-page-arrow-icon", {
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
  };

  // onSubmit parameter of Formik form
  const onSubmit = async (values) => {
    const loginResponse = await logInWithEmail(values.email, values.password);
    if (!loginResponse.errors) {
      props.history.push("/auth");
    } else {
      alert.error(customError(loginResponse.errors));
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

    console.log(loginForm.isValid);
    return errors;
  };

  // Formik form initialization
  const loginForm = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div id="login-page" className="login-page-main">
      <h1 className="login-page-heading">LOGIN</h1>
      <form
        className="login-page-form"
        onSubmit={loginForm.handleSubmit}
        autoComplete="off"
        noValidate
      >
        <div className="login-page-email-box">
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
              name="email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
            />
          </div>
          {loginForm.touched.email && loginForm.errors.email ? (
            <p className="login-page-error">{loginForm.errors.email}</p>
          ) : null}
        </div>
        <div className="login-page-password-box">
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
              name="password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
            />
          </div>
          {loginForm.touched.password && loginForm.errors.password ? (
            <p className="login-page-error">{loginForm.errors.password}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="login-page-btn"
          disabled={!loginForm.dirty || !loginForm.isValid}
        >
          login
          <span>
            <ArrowIcon
              alt="login-page-arrow"
              className="login-page-arrow-icon"
            />
          </span>
        </button>

        <p className="login-page-texts">forgot password?</p>
        <p className="login-page-texts">or connect with</p>
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
          <p className="login-page-bold-text login-page-texts">
            new here? join the community
            <span>
              <ArrowIcon className="login-page-arrow-icon" />
            </span>
          </p>
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
