import { FETCH_LOCATION } from "../actions/search";

const INITIAL_STATE = {
  autocomplete: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LOCATION:
      return { ...state, autocomplete: action.payload };
    default:
      return state;
  }
}
