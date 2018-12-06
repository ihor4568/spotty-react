import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = [];

export default function albumsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER_SONGS_SUCCESS:
      return action.payload;
    case actionTypes.ADD_USER_SONGS_SUCCESS:
      return action.payload;
    case actionTypes.REMOVE_USER_SONGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
