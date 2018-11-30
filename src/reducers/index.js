import { combineReducers } from "redux";

import weather from "./weather-data";
import forecastDays from "./forecast-days";

export default combineReducers({
	weather,
	forecastDays
});
