import { ADD_SONGS } from "../actionTypes";
import { MusicService } from "../../services/MusicService";

export function loadSongs(payload) {
  return async dispatch => {
    const songs = await MusicService.getAlbumsSongs("album1");
    dispatch(addSongs(Object.values(songs)));
  };
}

export function addSongs(payload) {
  return {
    type: ADD_SONGS,
    payload
  };
}
