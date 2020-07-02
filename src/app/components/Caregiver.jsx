import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Styles.css";

const Caregiver = ({ caregiver, idClicked, ratingStats }) => {
  const validateHealth = () => {
    let badge;
    if (caregiver.badges.health == "H1") {
      badge = <FontAwesomeIcon icon="trophy" />;
    } else if (caregiver.badges.health == "H2") {
      badge = <FontAwesomeIcon icon="sync" />;
    } else if (caregiver.badges.health == "H3") {
      badge = <FontAwesomeIcon icon="times-circle" />;
    }
    return badge;
  };

  const validateSafetyCheck = () => {
    let badge;
    if (caregiver.badges.safety == "Q1") {
      badge = <FontAwesomeIcon icon="award" />;
    } else if (caregiver.badges.safety == "Q2") {
      badge = <FontAwesomeIcon icon="sync" />;
    } else if (caregiver.badges.safety == "Q3") {
      badge = <FontAwesomeIcon icon="times-circle" />;
    }
    return badge;
  };
  return (
    <div className="container">
      <h1>Photo here</h1>
      <div>Name: {caregiver.name}</div>
      <div>Health Badge: {validateHealth()}</div>
      <div>Safety Badge: {validateSafetyCheck()}</div>
      <div>
        Rating:{" "}
        {ratingStats == "true" ? (
          <FontAwesomeIcon icon="heart" />
        ) : (
          <FontAwesomeIcon icon="heart-broken" />
        )}
      </div>
      <br />
      <button>Book</button>
      <Link to={"/dashboard"}>
        <button>Exit</button>
      </Link>
    </div>
  );
};
//const mapStateToProps = (state) => state;
const mapStateToProps = (state, ownProps) => {
  let idClicked = ownProps.match.params.id;
  let caregiver = state.caregivers.find(
    (caregiver) => (caregiver.id = idClicked)
  );
  console.log(state.reviews);
  let ratingStats;
  for (let i = 0; i < state.reviews.length; i++) {
    console.log(state.reviews[i].isLiked);
    state.reviews[i].owners.includes(idClicked)
      ? (ratingStats = state.reviews[i].isLiked)
      : null;
  }
  // = state.reviews.goodOwners.includes(idClicked);
  console.log(caregiver, ratingStats);
  return {
    caregiver,
    idClicked,
    ratingStats,
  };
};

export const ConnectedCaregiver = connect(mapStateToProps)(Caregiver);
