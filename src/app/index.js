import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./components/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faAward,
  faTrophy,
  faTimesCircle,
  faSync,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";

//App url: proplanner-app.herokuapp.com
library.add(faAward, faTrophy, faTimesCircle, faSync, faHeart, faHeartBroken);

ReactDOM.render(<Main />, document.getElementById("app"));
