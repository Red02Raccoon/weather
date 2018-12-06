import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { filterInfoForMainCard } from "../utils";
import config from "../config";
import { actionTypes } from "../actions/weather-data";
import { setData as weatherSetData } from "../actions/weather-data";

function getApiData(payload) {
  console.log(payload);

  let url = `${config.weather}?lat=${payload.lat}&lon=${
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
    console.log(response);

    const mainCard = filterInfoForMainCard(response);

    yield put(weatherSetData(mainCard));
  } catch (e) {
    console.log("error", e);
  }
}

export default function* watchSaga() {
  yield takeLatest(actionTypes.FETCH_REQUEST, fetchSaga);
}
