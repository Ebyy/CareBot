import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <Link to="/dashboard">
      <h5>Go to Dashboard</h5>
    </Link>
  </div>
);

export const ConnectedNavBar = connect((state) => state)(NavBar);
