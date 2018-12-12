import { actionTypes } from "../actions/location";

const INITIAL_STATE = {
  data: {
    lat: 51.5073,
    lng: -0.1277
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
