import { all } from "redux-saga/effects";

import fetchWeather from "./fetch-weather";
import fetchForecastDays from "./fetch-forecast-days";

export default function* rootSaga() {
  yield all([
		fetchWeather(),
		fetchForecastDays()
	]);
}
