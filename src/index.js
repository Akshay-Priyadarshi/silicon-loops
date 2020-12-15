import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { reducer, initialState } from "./store/reducer";
import { DataLayer } from "./store/dataLayer";
import { BrowserRouter } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.FADE,
  containerStyle: {
    zIndex: 10000,
  },
};

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
} else {
  console.log = () => {};
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataLayer reducer={reducer} initialState={initialState}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <App />
        </AlertProvider>
      </DataLayer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
