import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import LoginPage from "./pages/login-page/LoginPage";
import SignUpPage from "./pages/signup-page/SignupPage";
import TermsOfService from "./pages/terms-of-service/TermsOfService";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import Disclaimer from "./pages/disclaimer/Disclaimer";
import DataDeletion from "./pages/data-deletion/DataDeletion";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import AuthPagesLayout from "./pages/auth-pages-layout/AuthPagesLayout";
import HomeFooter from "./components/home-footer/HomeFooter";
import HomeHeader from "./components/home-header/HomeHeader";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import useDataLayerValue from "./store/dataLayer";
import { setAuthUser, setUnsubscribeUserFromDB } from "./store/actionConstants";
import { Route, Switch } from "react-router-dom";
import { auth, db } from "./services/firebaseApp";
import { userConverter } from "./models/UserModel";
import { currentUser } from "./services/authService";

function App() {
  const [{ mobileMenuOpen, authUser }, dispatch] = useDataLayerValue();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      let unsubscribeUserFromDB = () => {};
      if (user) {
        unsubscribeUserFromDB = db
          .collection("users")
          .withConverter(userConverter)
          .doc(user.uid)
          .onSnapshot(async (snap) => {
            console.log(snap.data());
            await dispatch({
              type: setAuthUser,
              payload: snap.data(),
            });
          });
        await dispatch({
          type: setUnsubscribeUserFromDB,
          payload: unsubscribeUserFromDB,
        });
      } else {
        await dispatch({
          type: setAuthUser,
          payload: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {console.log("currentUser", currentUser())}
      {console.log("authUser", authUser)}
      <HomeHeader />
      {mobileMenuOpen ? <MobileMenu /> : null}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/terms" exact component={TermsOfService} />
        <Route path="/privacy-policy" exact component={PrivacyPolicy} />
        <Route path="/disclaimer" exact component={Disclaimer} />
        <Route path="/data-deletion" exact component={DataDeletion} />
        {currentUser() ? (
          <Route path="/auth" component={AuthPagesLayout} />
        ) : null}
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      {currentUser() ? null : <HomeFooter />}
    </div>
  );
}

export default App;
