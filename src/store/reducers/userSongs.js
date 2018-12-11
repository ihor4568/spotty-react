import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = [];

export default function userSongsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER_SONGS_SUCCESS:
    case actionTypes.ADD_USER_SONG_SUCCESS:
    case actionTypes.REMOVE_USER_SONG_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
