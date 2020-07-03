import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ConnectedCaregivers } from "./Caregivers";
import { Button, Alert } from "reactstrap";
import "./Styles.css";

/**  User Dashboard View
 *
 *  - shows recommended caregivers and gives user search and view all options too
 */

const Dashboard = ({ groups, recommended, caregivers }) => {
  const [showAll, setShowAll] = useState(false);

  const [findProfile, setFindProfile] = useState(false);
  const onDismiss = () => setFindProfile(false);

  return (
    <div className="container">
      <h2>Welcome Sam</h2>
      <br />
      <div>
        <h4>Recommended Caregivers Near You</h4>
        <div className="row">
          {recommended.map((recommendedItem) => (
            <div
              className="col card p-2 mt-2 ml-3"
              style={{ textAlign: "center" }}
              key={recommendedItem.id}
            >
              <strong>{recommendedItem.name}</strong>
              <Link
                to={`/caregivers/${recommendedItem.employeeID}`}
                id={recommendedItem.employeeID}
              >
                <p>{recommendedItem.employeeName}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div>
        <input type="text" placeholder="Enter Caregiver Name" />
        <Button
          size="sm"
          color="primary"
          onClick={() => setFindProfile(!findProfile)}
        >
          Search
        </Button>
        {findProfile && (
          <Alert isOpen={findProfile} toggle={onDismiss} color="warning">
            Finds Profile and Populates Caregiver Profile View with Info
          </Alert>
        )}
        <br />

        <Button color="info" size="md" onClick={() => setShowAll(!showAll)}>
          All Caregivers
        </Button>
        {showAll && (
          <div>
            <br />
            {groups.map((group) => (
              <ConnectedCaregivers
                key={group.id}
                id={group.id}
                name={group.name}
                className="row"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state.recommended);
  return {
    recommended: state.recommended,
    caregivers: state.caregivers,
    groups: state.groups,
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
