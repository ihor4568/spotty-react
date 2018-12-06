import * as actionTypes from "../actionTypes";

const INITIAL_STATE = [];

export default function artistsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_ARTISTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
