/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./defaultState");

// const {
//   user,
//   recommended,
//   caregivers,
//   groups,
//   status,
//   tasks,
//   policeCheck,
//   covidStatus,
//   reviews,
// } = mockData;
const { defaultState } = mockData;
const data = JSON.stringify({ defaultState });
// const data = JSON.stringify({
//   user,
//   recommended,
//   caregivers,
//   groups,
//   status,
//   tasks,
//   policeCheck,
//   covidStatus,
//   reviews,
// });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
