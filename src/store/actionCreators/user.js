import * as actionTypes from "../actionTypes";

import { MusicService } from "../../services/MusicService";
import { AuthService } from "../../services/AuthService";

export function getUserSongs() {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.FETCH_USER_SONGS_START });
      const user = await AuthService.check();
      const songs = await MusicService.getUserSongs(user.uid);
      dispatch({
        type: actionTypes.FETCH_USER_SONGS_SUCCESS,
        payload: Object.values(songs)
      });
    } catch (e) {
      dispatch({ type: actionTypes.FETCH_USER_SONGS_FAIL });
    }
  };
}

export function setUserSongs(songId) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.ADD_USER_SONGS_START });
      const user = await AuthService.check();
      await MusicService.setUserSong(user.uid, songId);
      dispatch({
        type: actionTypes.ADD_USER_SONGS_SUCCESS,
        payload: getUserSongs()
      });
    } catch (e) {
      dispatch({ type: actionTypes.ADD_USER_SONGS_FAIL });
    }
  };
}

export function removeUserSongs(songId) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.REMOVE_USER_SONGS_START });
      const user = await AuthService.check();
      await MusicService.removeUserSong(user.uid, songId);
      dispatch({
        type: actionTypes.REMOVE_USER_SONGS_SUCCESS,
        payload: getUserSongs()
      });
    } catch (e) {
      dispatch({ type: actionTypes.REMOVE_USER_SONGS_FAIL });
    }
  };
}
