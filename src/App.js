import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import LoginPage from "./pages/login-page/LoginPage";
import SignUpPage from "./pages/signup-page/SignupPage";
import HomeFooter from "./components/home-footer/HomeFooter";
import HomeHeader from "./components/home-header/HomeHeader";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import useDataLayerValue from "./store/dataLayer";
import { Route } from "react-router-dom";

function App() {
  const [{ mobileMenuOpen }] = useDataLayerValue();
  useEffect(() => {}, [mobileMenuOpen]);

  return (
    <div className="App">
      <HomeHeader />
      {mobileMenuOpen ? <MobileMenu /> : null}
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <HomeFooter />
    </div>
  );
}

export default App;
