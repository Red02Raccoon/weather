import {actionTypes} from '../actions';

export const initialState = { }

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{error: action.error}
      }
    default:
      return state
  }
}
