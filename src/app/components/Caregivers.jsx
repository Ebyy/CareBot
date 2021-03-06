import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Caregivers = ({ name, caregivers }) => (
  <div className="card p-4 m-3">
    <h5>List of All Caregivers - {name}</h5>
    <div>
      {caregivers.map((caregiver) => (
        <Link
          to={`/caregivers/${caregiver.id}`}
          key={caregiver.id}
          id={caregiver.id}
          name={caregiver.name}
        >
          <div>{caregiver.name}</div>
        </Link>
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupID,
    caregivers: state.caregivers.filter(
      (caregiver) => caregiver.group === groupID
    ),
  };
};

export const ConnectedCaregivers = connect(mapStateToProps)(Caregivers);
