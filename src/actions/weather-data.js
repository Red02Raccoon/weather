export const actionTypes = {
  FETCH_REQUEST: "WEATHER_FETCH",
  FETCH_SUCCESS: "WEATHER_FETCH_SUCCESS",
  FETCH_FAILURE: "WEATHER_FETCH_FAILURE",
  SET_DATA: "WEATHER_SET_DATA"
};

export const fetchRequest = payload => ({
  type: actionTypes.FETCH_REQUEST,
  payload
});

export const setData = payload => ({
  type: actionTypes.SET_DATA,
  payload
});
