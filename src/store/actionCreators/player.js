import { ON_PLAY } from "../actionTypes";
import { ON_PAUSE } from "../actionTypes";
import { MusicService } from "../../services/MusicService";

export function playSong(songId) {
  return async dispatch => {
    const song = await MusicService.getSong(songId);
    dispatch(onPlay(Object.values(song)));
  };
}

export function pauseSong(songId) {
  return async dispatch => {
    const song = await MusicService.getSong(songId);
    dispatch(onPause(Object.values(song)));
  };
}

export function onPlay(payload) {
  return {
    type: ON_PLAY,
    payload
  };
}

export function onPause(payload) {
  return {
    type: ON_PAUSE,
    payload
  };
}
