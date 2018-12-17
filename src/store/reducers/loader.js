import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = false;

export default function loaderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER_SONGS_START:
    case actionTypes.ADD_ALBUMS_START:
    case actionTypes.ADD_ARTISTS_START:
    case actionTypes.FETCH_ALBUM_SONGS_START:
    case actionTypes.FETCH_ARTISTS_SONGS_START:
    case actionTypes.GET_SONG_START:
      return true;
    case actionTypes.FETCH_USER_SONGS_SUCCESS:
    case actionTypes.FETCH_USER_SONGS_FAIL:
    case actionTypes.ADD_ALBUMS_SUCCESS:
    case actionTypes.ADD_ALBUMS_FAIL:
    case actionTypes.ADD_ARTISTS_SUCCESS:
    case actionTypes.ADD_ARTISTS_FAIL:
    case actionTypes.FETCH_ALBUM_SONGS_SUCCESS:
    case actionTypes.FETCH_ALBUM_SONGS_FAIL:
    case actionTypes.FETCH_ARTISTS_SONGS_SUCCESS:
    case actionTypes.FETCH_ARTISTS_SONGS_FAIL:
    case actionTypes.SAVE_SONGS:
    case actionTypes.GET_SONG_SUCCESS:
    case actionTypes.GET_SONG_FAIL:
      return false;
    default:
      return state;
  }
}
