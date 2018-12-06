import * as actionTypes from "../actionTypes";

import { MusicService } from "../../services/MusicService";

export function loadAlbums() {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.ADD_ALBUMS_START });
      dispatch(addAlbums1());
      const albums = await MusicService.getAllAlbums();
      dispatch(addAlbums(Object.values(albums)));
    } catch (e) {
      dispatch({ type: actionTypes.ADD_ALBUMS_FAIL });
    }
  };
}

export function addAlbums1() {
  return async dispatch => {
    const albums = await MusicService.setUserSong(
      "0KZUh1F2WnYeFM4HE1mrEDaeVAd2",
      "song1"
    );
    dispatch(albums);
  };
}

export function addAlbums(payload) {
  return {
    type: actionTypes.ADD_ALBUMS_SUCCESS,
    payload
  };
}
