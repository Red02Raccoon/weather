import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { filterInfoForecastDays } from "../utils";
import { actionTypes } from "../actions/forecast-days";
import { setData as forecastSetData } from "../actions/forecast-days";

function getApiData(payload) {
  const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast`;

  let url = `${ROOT_URL}?lat=${payload.lat}&lon=${
    payload.lng
  }&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;

  return axios
    .get(url)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.log("error", error);
    });
}

function* fetchSaga({ payload }) {
  try {
    const response = yield call(getApiData, payload);
    const forecastDays = filterInfoForecastDays(response);

    yield put(forecastSetData(forecastDays));
  } catch (e) {
    console.log("error", e);
  }
}

export default function* watchSaga() {
  yield takeLatest(actionTypes.FETCH_REQUEST, fetchSaga);
}
