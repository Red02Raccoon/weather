export const actionTypes = {
  FETCH_REQUEST: "WEATHER_FETCH",
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
