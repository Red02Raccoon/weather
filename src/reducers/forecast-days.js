import { actionTypes } from "../actions/forecast-days";

const INITIAL_STATE = {
  data: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        data: {}
      };
    case actionTypes.SET_DATA:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    default:
      return state;
  }
};
