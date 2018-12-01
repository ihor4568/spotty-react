import { ARTISTS_SONGS } from "../actionTypes";

import { MusicService } from "../../services/MusicService";

export function loadArtistSongs(payload) {
  return async dispatch => {
    const artistsSongs = await MusicService.getArtistsSongs();
    dispatch(getArtistsSongs(Object.values(artistsSongs)));
  };
}

export function getArtistsSongs(payload) {
  return {
    type: ARTISTS_SONGS,
    payload
  };
}
