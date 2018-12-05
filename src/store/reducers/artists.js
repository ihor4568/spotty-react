import * as ationTypes from "../actionTypes";

const INITIAL_STATE = [];

export default function artistsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ationTypes.ADD_ARTISTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
