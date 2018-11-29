import { ADD_SONG } from "../actionTypes";

import { MusicService } from "../../services/MusicService";

export function Song(payload) {
  return async dispatch => {
    const info = await MusicService.getSong();
    dispatch(addSong(Object.values(info)));
  };
}

export function addSong(payload) {
  return {
    type: ADD_SONG,
    payload
  };
}
