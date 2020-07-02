import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ConnectedCaregivers } from "./Caregivers";

const Dashboard = ({ groups, recommended, caregivers }) => (
  <div>
    <h2>Welcome Sam</h2>
    <br />
    <div>
      <h4>Recommended Caregivers Near You</h4>
      <div className="row">
        {recommended.map((recommendedItem) => (
          <div className="col" key={recommendedItem.id}>
            <strong>{recommendedItem.name}</strong>

            <p>{recommendedItem.employeeName}</p>
          </div>
        ))}
      </div>
    </div>
    <br />
    <div>
      <input type="text" placeholder="Enter Caregiver Name" />
      <button>Search</button>
      <br />

      <button>All Caregivers</button>
      <br />
      {groups.map((group) => (
        <ConnectedCaregivers key={group.id} id={group.id} name={group.name} className="col"/>
      ))}
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    recommended: state.recommended,
    caregivers: state.caregivers,
    groups: state.groups,
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
