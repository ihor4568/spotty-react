import { ADD_ALBUM_SONGS } from "../actionTypes";
import { MusicService } from "../../services/MusicService";

export function loadSongs(albumId) {
  return async dispatch => {
    try {
      const songs = await MusicService.getAlbumsSongs(albumId);
      dispatch(addAlbumSongs(Object.values(songs)));
    } catch {
      window.location.pathname = "/404";
    }
  };
}

export function addAlbumSongs(payload) {
  return {
    type: ADD_ALBUM_SONGS,
    payload
  };
}
