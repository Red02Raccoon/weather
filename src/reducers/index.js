import { combineReducers } from "redux";

import weatherData from "./weather-data";
import mainCard from "./main-card";

export default combineReducers({
  weatherData,
  mainCard
});
