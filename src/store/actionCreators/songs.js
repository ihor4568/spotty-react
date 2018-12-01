import { ARTISTS_SONGS } from "../actionTypes";

import { MusicService } from "../../services/MusicService";

export function loadArtistsSongs(artist, payload) {
  return async dispatch => {
    const songs = await MusicService.getArtistsSongs(artist);
    dispatch(getArtistsSongs(Object.values(songs)));
  };
}

export function getArtistsSongs(payload) {
  return {
    type: ARTISTS_SONGS,
    payload
  };
}
