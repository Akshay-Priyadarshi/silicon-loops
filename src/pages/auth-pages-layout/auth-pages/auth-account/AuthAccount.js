import React from "react";
import "./AuthAccount.css";
import { logOut } from "../../../../services/authService";
import useDataLayerValue from "../../../../store/dataLayer";
import { setTab, tabs } from "../../../../store/actionConstants";

function AuthAccount(props) {
  const [{ unsubscribeUserFromDB }, dispatch] = useDataLayerValue();

  console.log(props);
  return (
    <div className="auth-account-main">
      <h1>Auth Account</h1>
      <button
        onClick={() => {
          dispatch({ type: setTab, payload: tabs.f });
          unsubscribeUserFromDB();
          logOut();
          props.history.push("/login");
        }}
      >
        logout
      </button>
    </div>
  );
}

export default AuthAccount;
