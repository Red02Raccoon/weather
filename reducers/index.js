import { combineReducers } from "redux";

import weather from "./weather-data";
import forecastDays from "./forecast-days";
import location from "./location";

export default combineReducers({
  weather,
  forecastDays,
  location
});
