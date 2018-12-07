import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = [];

export default function albumsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_ALBUMS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
