import React from "react";
import "./AuthPages.css";
import { Switch, Route } from "react-router-dom";
import AuthFeeds from "./auth-feeds/AuthFeeds";
import AuthSearch from "./auth-search/AuthSearch";
import AuthMessages from "./auth-messages/AuthMessages";
import AuthAccount from "./auth-account/AuthAccount";

function AuthPages({ props }) {
  return (
    <div className="auth-pages-main">
      <Switch>
        <Route path={props.match.url + "/feeds"} component={AuthFeeds} exact />
        <Route
          path={props.match.url + "/search"}
          component={AuthSearch}
          exact
        />
        <Route
          path={props.match.url + "/messages"}
          component={AuthMessages}
          exact
        />
        <Route
          path={props.match.url + "/account"}
          component={AuthAccount}
          exact
        />
      </Switch>
    </div>
  );
}

export default AuthPages;
