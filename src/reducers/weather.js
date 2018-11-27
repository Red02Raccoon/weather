import { FETCH_WEATHER_DATA } from "../actions/get-weather";

const INITIAL_STATE = {
  loading: false,
  data: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_WEATHER_DATA:
      return { ...state, loading: true };
    default:
      return state;
  }
}
