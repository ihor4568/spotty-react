import * as actionTypes from "../actionTypes";

const INITIAL_STATE = [];

export default function songsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_ALBUM_SONGS_SUCCESS:
      return action.payload;
    case actionTypes.FETCH_ALBUM_SONGS_FAIL:
      return (window.location.pathname = "/404");
    case actionTypes.FETCH_ARTISTS_SONGS_SUCCESS:
      return action.payload;
    case actionTypes.FETCH_ARTISTS_SONGS_FAIL:
      return (window.location.pathname = "/404");
    default:
      return state;
  }
}
