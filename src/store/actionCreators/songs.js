import { ADD_ALBUM_SONGS } from "../actionTypes";
import { ALBUM_SONGS } from "../actionTypes";
import { MusicService } from "../../services/MusicService";

export function loadSongs() {
  return async dispatch => {
    const songs = await MusicService.getAlbumsSongs("album5");
    dispatch(addSongs(Object.values(songs)));
  };
}

export function addSongs(payload) {
  return {
    type: ADD_ALBUM_SONGS,
    payload
  };
}

export function loadAlbumSongs(albumId) {
  return async dispatch => {
    try {
      const songs = await MusicService.getAlbumsSongs(albumId);
      dispatch(getArtistsSongs(Object.values(songs)));
    } catch {
      window.location.pathname = "/404";
      // console.log("Yoooooooooo");
    }
  };
}

export function getArtistsSongs(payload) {
  return {
    type: ALBUM_SONGS,
    payload
  };
}
