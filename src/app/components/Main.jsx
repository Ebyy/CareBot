import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/index";
import { history } from "../store/history";
// import { Redirect } from "react-router";
import { ConnectedDashboard } from "../components/Dashboard";
import { ConnectedNavBar } from "../components/MenuNavBar";
import { HomePage } from "../components/Homepage/HomePage";
import { ConnectedCaregiver } from "../components/Caregiver";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

export const Main = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div>
          <ConnectedNavBar />{" "}
          <Route exact path="/" render={() => <HomePage />} />
          <Route
            exact
            path="/dashboard"
            render={() => <ConnectedDashboard />}
          />
          <Route
            exact
            path="/caregivers/:id"
            render={({ match }) => <ConnectedCaregiver match={match} />}
          />
        </div>
      </Provider>
    </Router>
  );
};
