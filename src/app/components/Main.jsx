import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/index";
// import { Router, Route } from "react-router-dom";
// import { history } from "../store/history";
// import { Redirect } from "react-router";
import { ConnectedDashboard } from "../components/Dashboard";

export const Main = () => {
  return (
    <Provider store={store}>
      <div>
        <ConnectedDashboard />
      </div>
    </Provider>
  );
};
