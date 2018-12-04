import * as ationTypes from "../actionTypes";

const INITIAL_STATE = [];

export default function albumsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ationTypes.ADD_ALBUMS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
