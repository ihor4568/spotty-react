import * as actionTypes from "../actionTypes";
import { MusicService } from "../../services/MusicService";

export function loadUserSongs(userId) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.FETCH_USER_SONGS_START });
      const userSongs = await MusicService.getUserSongs(userId);
      dispatch({
        type: actionTypes.FETCH_USER_SONGS_SUCCESS,
        payload: userSongs,
        songs: userSongs
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

export function addUserSong(userId, songId) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.ADD_USER_SONG_START });
      await MusicService.setUserSong(userId, songId);
      const userSongs = await MusicService.getUserSongs(userId);
      dispatch({
        type: actionTypes.ADD_USER_SONG_SUCCESS,
        payload: userSongs
      });
      dispatch({
        type: actionTypes.SAVE_SONGS,
        savedSongs: userSongs
      });
    } catch (e) {
      dispatch({ type: actionTypes.ADD_USER_SONG_FAIL });
    }
  };
}

export function removeUserSong(userId, songId) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.REMOVE_USER_SONG_START });
      await MusicService.removeUserSong(userId, songId);
      const userSongs = await MusicService.getUserSongs(userId);
      dispatch({
        type: actionTypes.REMOVE_USER_SONG_SUCCESS,
        payload: userSongs
      });
      dispatch({
        type: actionTypes.SAVE_SONGS,
        savedSongs: userSongs
      });
    } catch (e) {
      dispatch({ type: actionTypes.REMOVE_USER_SONG_FAIL });
    }
  };
}
