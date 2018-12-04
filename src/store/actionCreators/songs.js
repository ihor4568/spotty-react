import * as actionTypes from "../actionTypes";

import { MusicService } from "../../services/MusicService";

export function loadArtistsSongs(artist) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.FETCH_ARTISTS_SONGS_START });
      const songs = await MusicService.getArtistsSongs(artist);
      dispatch(getArtistsSongs(Object.values(songs)));
    } catch (e) {
      dispatch({ type: actionTypes.FETCH_ARTISTS_SONGS_FAIL });
    }
  };
}

export function getArtistsSongs(payload) {
  return {
    type: actionTypes.FETCH_ARTISTS_SONGS_SUCCESS,
    payload
  };
}
