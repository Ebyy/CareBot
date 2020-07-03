import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, PopoverBody, PopoverHeader } from "reactstrap";
import Assgard from "../images/assgard.jpg";
import John from "../images/John.jpg";
import Jane from "../images/Jane.jpg";
import Ollie from "../images/Ollie.jpg";
import Unknown from "../images/Unknown-person.gif";
import "./Styles.css";


/** View Caregiver Profile
 * 
 *  - contains caregiver information and badges to encourage user trust
 */




const Caregiver = ({ caregiver, idClicked, ratingStats }) => {
  //Handle Badge Info Pop up
  const [safeBadgeInfoOn, setSafeBadgeInfoOn] = useState(false);
  const [healthBadgeInfoOn, setHealthBadgeInfoOn] = useState(false);

  const validateHealth = () => {
    let badge;
    if (caregiver.badges.health == "H1") {
      badge = <FontAwesomeIcon icon="thumbs-up" />;
    } else if (caregiver.badges.health == "H2") {
      badge = <FontAwesomeIcon icon="sync" />;
    } else if (caregiver.badges.health == "H3") {
      badge = <FontAwesomeIcon icon="thumbs-down" />;
    }
    return badge;
  };

  const validateSafetyCheck = () => {
    let badge;
    if (caregiver.badges.safety == "Q1") {
      badge = <FontAwesomeIcon icon="thumbs-up" />;
    } else if (caregiver.badges.safety == "Q2") {
      badge = <FontAwesomeIcon icon="sync" />;
    } else if (caregiver.badges.safety == "Q3") {
      badge = <FontAwesomeIcon icon="thumbs-down" />;
    }
    return badge;
  };

  const getPhoto = (personID) => {
    switch (personID) {
      case "C1":
        return Jane;
      case "C2":
        return John;
      case "C3":
        return Ollie;
      case "C5":
        return Assgard;
      default:
        return Unknown;
    }
  };
  return (
    <div className="container">
      <div className="gallery">
        <img src={getPhoto(idClicked)} alt="staff photo" />
      </div>
      <div className="card">
        <div>Name: {caregiver.name}</div>
        <div
          onMouseEnter={() => setSafeBadgeInfoOn(true)}
          onMouseLeave={() => setSafeBadgeInfoOn(false)}
          id={"Badge1"}
        >
          Health Badge: {validateHealth()}
        </div>
        {safeBadgeInfoOn && (
          <Popover
            placement={"bottom"}
            isOpen={safeBadgeInfoOn}
            target={"Badge1"}
          >
            <PopoverHeader>Description</PopoverHeader>
            <PopoverBody>Tier 3 Police Clearance Status</PopoverBody>
          </Popover>
        )}
        <div
          className="healthCheck"
          onMouseEnter={() => setHealthBadgeInfoOn(true)}
          onMouseLeave={() => setHealthBadgeInfoOn(false)}
          id={"Badge2"}
        >
          Safety Badge: {validateSafetyCheck()}
        </div>
        {healthBadgeInfoOn && (
          <Popover
            placement={"bottom"}
            isOpen={healthBadgeInfoOn}
            target={"Badge2"}
          >
            <PopoverHeader>Description</PopoverHeader>
            <PopoverBody>Covid-19 Negative</PopoverBody>
          </Popover>
        )}
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
    </div>
  );
};
//const mapStateToProps = (state) => state;
const mapStateToProps = (state, ownProps) => {
  let idClicked = ownProps.match.params.id;
  let caregiver = state.caregivers.find(
    (caregiver) => caregiver.id == idClicked
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
