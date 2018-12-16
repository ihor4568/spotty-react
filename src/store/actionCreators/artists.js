import * as actionTypes from "../actionTypes";

import { MusicService } from "../../services/MusicService";

export function loadArtists() {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.ADD_ARTISTS_START });
      const artists = await MusicService.getAllArtists();
      dispatch(addArtists(Object.values(artists)));
    } catch (e) {
      dispatch(addArtistsFail());
    }
  };
}

export function addArtists(payload) {
  return {
    type: actionTypes.ADD_ARTISTS_SUCCESS,
    payload
  };
}

export function addArtistsFail() {
  return {
    type: actionTypes.ADD_ARTISTS_FAIL
  };
}

export function loadCachedArtists() {
  return (dispatch, getState) => {
    if (getState().artists.length) {
      return;
    }
    dispatch(loadArtists());
  };
}
