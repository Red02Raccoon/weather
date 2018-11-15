import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { actionTypes, setData } from "../actions/weather-data";

function getApiData(payload) {
  const API_KEY = "0b6c1ff5605b99b94aa899b8af970c05";
  const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather`;

  let url = `${ROOT_URL}?lat=${payload.lat}&lon=${
    payload.lon
  }&units=metric&appid=${API_KEY}`;

  return axios
    .get(url)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.log("error", error);
    });
}

function* fetchWeather({ payload }) {
  try {
    const response = yield call(getApiData, payload);

    yield put(setData(response));
  } catch (e) {
    console.log("error", e);
  }
}

export default function* watchSaga() {
  yield takeLatest(actionTypes.FETCH_REQUEST, fetchWeather);
}
