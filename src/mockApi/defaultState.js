const defaultState = {
  user: [
    {
      id: "U01",
      name: "Sam",
    },
  ],
  recommended: [
    {
      name: "Volunteer",
      id: "L1",
      employeeID: "C1",
      employeeName: "Jane",
      owner: "U01",
    },
    {
      name: "Professional",
      id: "L2",
      employeeID: "C4",
      employeeName: "Jas",
      owner: "U01",
    },
  ],
  caregivers: [
    {
      name: "Jane",
      id: "C1",
      group: "G1",
      badges: {
        safety: "Q1",
        health: "H2",
      },
    },
    {
      name: "John",
      id: "C2",
      group: "G2",
      badges: {
        safety: "Q1",
        health: "H1",
      },
    },
    {
      name: "Ollie",
      id: "C3",
      group: "G1",
      badges: {
        safety: "Q2",
        health: "H1",
      },
    },
    {
      name: "Jas",
      id: "C4",
      group: "G2",
      badges: {
        safety: "Q1",
        health: "H2",
      },
    },
    {
      name: "Assard",
      id: "C5",
      group: "G2",
      badges: {
        safety: "Q3",
        health: "H1",
      },
    },
  ],
  groups: [
    {
      name: "voluteers",
      id: "G1",
    },
    {
      name: "professionals",
      id: "G2",
    },
  ],
  status: [
    {
      name: "In-progress",
      id: "S1",
    },
    {
      name: "Done",
      id: "S2",
    },
  ],
  tasks: [
    {
      name: "Keep me company",
      id: "T01",
      owner: "C3",
      status: "S02",
      category: "G01",
    },
    {
      name: "Fill Prescription",
      id: "T02",
      owner: "C4",
      status: "S01",
      groups: "G02",
    },
    {
      name: "Grocery Run",
      id: "T03",
      owner: "C1",
      status: "S02",
      groups: "G02",
    },
  ],
  policeCheck: [
    {
      id: "Q1",
      name: "Valid Tier3",
    },
    {
      id: "Q2",
      name: "Renewal Due",
    },
    {
      id: "Q3",
      name: "Invalid Tier3",
    },
  ],
  covidStatus: [
    {
      name: "Certified unsafe",
      id: "H3",
    },
    {
      name: "Certified safe",
      id: "H1",
    },
    {
      name: "Due for Review",
      id: "H2",
    },
  ],
  reviews: [
    {
      owners: ["C1", "C4", "C5"],
      id: "R1",
      isLiked: "true",
    },
    {
      owners: ["C3", "C2"],
      id: "R2",
      isLiked: "false",
    },
  ],
};
module.exports = { defaultState };
