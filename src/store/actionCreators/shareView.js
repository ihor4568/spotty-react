import * as actionTypes from "../actionTypes";
import { MusicService } from "../../services/MusicService";

export function getSong(id) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.ADD_SONG_START });
      const song = await MusicService.getSong(id);
      dispatch(addSong(song));
    } catch (e) {
      dispatch({ type: actionTypes.ADD_SONG_FAIL });
    }
  };
}

export function addSong(payload) {
  return {
    type: actionTypes.ADD_SONG_SUCCESS,
    payload
  };
}
