import React, { useState, useEffect } from "react";
import "./AuthPagesLayout.css";
import AuthFeeds from "./auth-pages/auth-feeds/AuthFeeds";
import AuthSearch from "./auth-pages/auth-search/AuthSearch";
import AuthMessages from "./auth-pages/auth-messages/AuthMessages";
import AuthAccount from "./auth-pages/auth-account/AuthAccount";
import { Switch, Route } from "react-router-dom";
import { ReactComponent as FeedOutlined } from "../../assets/feed.svg";
import { ReactComponent as FeedFilled } from "../../assets/feed-filled.svg";
import { ReactComponent as SearchOutlined } from "../../assets/search.svg";
import { ReactComponent as SearchFilled } from "../../assets/search-filled.svg";
import { ReactComponent as MessageOutlined } from "../../assets/message.svg";
import { ReactComponent as MessageFilled } from "../../assets/message-filled.svg";
import { ReactComponent as AccountOutlined } from "../../assets/user.svg";
import { ReactComponent as AccountFilled } from "../../assets/user-filled.svg";

function AuthPagesLayout(props) {
  const tabs = { f: "feeds", s: "search", m: "messages", a: "account" };
  const [tab, setTab] = useState(tabs.f);
  const [currentLink, setCurrentLink] = useState(props.match.url + "/feeds");

  useEffect(() => {
    props.history.push(currentLink);
  }, [currentLink, props.history]);

  const switchView = (tabData) => {
    setTab(tabData);
    setCurrentLink(props.match.url + "/" + tabData);
  };

  return (
    <div className="auth-pages-layout-main">
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
      <div className="auth-pages-layout-navbar-container">
        <div
          onClick={() => switchView(tabs.f)}
          className="auth-pages-layout-navbar-div"
        >
          {tab === tabs.f ? (
            <FeedFilled className="auth-pages-layout-navbar-icon" />
          ) : (
            <FeedOutlined className="auth-pages-layout-navbar-icon" />
          )}
        </div>
        <div
          onClick={() => switchView(tabs.s)}
          className="auth-pages-layout-navbar-div"
        >
          {tab === tabs.s ? (
            <SearchFilled className="auth-pages-layout-navbar-icon" />
          ) : (
            <SearchOutlined className="auth-pages-layout-navbar-icon" />
          )}
        </div>
        <div
          onClick={() => switchView(tabs.m)}
          className="auth-pages-layout-navbar-div"
        >
          {tab === tabs.m ? (
            <MessageFilled className="auth-pages-layout-navbar-icon" />
          ) : (
            <MessageOutlined className="auth-pages-layout-navbar-icon" />
          )}
        </div>
        <div
          onClick={() => switchView(tabs.a)}
          className="auth-pages-layout-navbar-div"
        >
          {tab === tabs.a ? (
            <AccountFilled className="auth-pages-layout-navbar-icon" />
          ) : (
            <AccountOutlined className="auth-pages-layout-navbar-icon" />
          )}
        </div>
      </div>
      {console.log(currentLink)}
    </div>
  );
}

export default AuthPagesLayout;
