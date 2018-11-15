import { all } from "redux-saga/effects";

import fetchWeather from "./fetch-weather";

export default function* rootSaga() {
  yield all([fetchWeather()]);
}
