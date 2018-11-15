import { actionTypes } from "../actions/main-card";

const INITIAL_STATE = {
  data: {}
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
