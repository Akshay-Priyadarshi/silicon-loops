import React from "react";
import "./AuthAccount.css";
import { logOut } from "../../../../services/authService";

function AuthAccount(props) {
  console.log(props);
  return (
    <div className="auth-account-main">
      <h1>Auth Account</h1>
      <button
        onClick={() => {
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
