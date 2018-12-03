export const actionTypes = {
  FETCH_REQUEST: "FORECAST_DAYS_FETCH",
  SET_DATA: "FORECAST_DAYS_DATA"
};

export const fetchRequest = payload => ({
  type: actionTypes.FETCH_REQUEST,
  payload
});

export const setData = payload => ({
  type: actionTypes.SET_DATA,
  payload
});
