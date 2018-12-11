import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = false;

export default function loaderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_ALBUMS_START:
    case actionTypes.ADD_ALBUMS_FAIL:
    case actionTypes.ADD_ARTISTS_START:
    case actionTypes.ADD_ARTISTS_FAIL:
      return true;
    case actionTypes.ADD_ALBUMS_SUCCESS:
    case actionTypes.ADD_ARTISTS_SUCCESS:
      return false;
    default:
      return state;
  }
}
