import * as actionTypes from "../actionTypes";

import { MusicService } from "../../services/MusicService";

export function loadUserSongs(userId) {
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

export function loadCachedUserSongs(userId) {
  return (dispatch, getState) => {
    if (getState().userSongs.length) {
      return;
    }
    dispatch(loadUserSongs(userId));
  };
}

export function addUserSongs(userId, songId) {
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
