import React, { useEffect } from "react";
import "./AuthPagesLayout.css";
import AuthPages from "./auth-pages/AuthPages";
import { ReactComponent as FeedOutlined } from "../../assets/feed.svg";
import { ReactComponent as FeedFilled } from "../../assets/feed-filled.svg";
import { ReactComponent as SearchOutlined } from "../../assets/search.svg";
import { ReactComponent as SearchFilled } from "../../assets/search-filled.svg";
import { ReactComponent as MessageOutlined } from "../../assets/message.svg";
import { ReactComponent as MessageFilled } from "../../assets/message-filled.svg";
import { ReactComponent as AccountOutlined } from "../../assets/user.svg";
import { ReactComponent as AccountFilled } from "../../assets/user-filled.svg";
import useDataLayerValue from "../../store/dataLayer";
import { tabs, setTab } from "../../store/actionConstants";

function AuthPagesLayout(props) {
  const [{ tab, authUser }, dispatch] = useDataLayerValue();

  useEffect(() => {
    props.history.push(props.match.url + "/" + tab);
    console.log(tab);
  }, [tab, authUser]);

  const switchView = (tabData) => {
    dispatch({
      type: setTab,
      payload: tabData,
    });
  };

  return (
    <div className="auth-pages-layout-main">
      <AuthPages props={props} />
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
    </div>
  );
}

export default AuthPagesLayout;
