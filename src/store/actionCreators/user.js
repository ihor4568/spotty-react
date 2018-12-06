import * as actionTypes from "../actionTypes";

import { MusicService } from "../../services/MusicService";

export function getUserSongs(userId) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.FETCH_USER_SONGS_START });
      const userSongs = await MusicService.getUserSongs(userId);
      dispatch({
        type: actionTypes.FETCH_USER_SONGS_SUCCESS,
        payload: Object.values(userSongs)
      });
    } catch (e) {
      dispatch({ type: actionTypes.FETCH_USER_SONGS_FAIL });
    }
  };
}

export function setUserSongs(userId, songId) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.ADD_USER_SONGS_START });
      await MusicService.setUserSong(userId, songId);
      const userSongs = await MusicService.getUserSongs(userId);
      dispatch({
        type: actionTypes.ADD_USER_SONGS_SUCCESS,
        payload: Object.values(userSongs)
      });
    } catch (e) {
      dispatch({ type: actionTypes.ADD_USER_SONGS_FAIL });
    }
  };
}

export function removeUserSongs(userId, songId) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.REMOVE_USER_SONGS_START });
      await MusicService.removeUserSong(userId, songId);
      const userSongs = await MusicService.getUserSongs(userId);
      dispatch({
        type: actionTypes.REMOVE_USER_SONGS_SUCCESS,
        payload: Object.values(userSongs)
      });
    } catch (e) {
      dispatch({ type: actionTypes.REMOVE_USER_SONGS_FAIL });
    }
  };
}
