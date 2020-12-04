import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import LoginPage from "./pages/login-page/LoginPage";
import SignUpPage from "./pages/signup-page/SignupPage";
import AuthPagesLayout from "./pages/auth-pages-layout/AuthPagesLayout";
import HomeFooter from "./components/home-footer/HomeFooter";
import HomeHeader from "./components/home-header/HomeHeader";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import useDataLayerValue from "./store/dataLayer";
import { Route, Switch } from "react-router-dom";

function App() {
  const [{ mobileMenuOpen, authUser }] = useDataLayerValue();

  useEffect(() => {}, [authUser]);

  return (
    <div className="App">
      <HomeHeader />
      {mobileMenuOpen ? <MobileMenu /> : null}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/auth" component={AuthPagesLayout} />
      </Switch>
      {authUser ? null : <HomeFooter />}
    </div>
  );
}

export default App;
