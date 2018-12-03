import { ON_PLAY } from "../actionTypes";
import { ON_PAUSE } from "../actionTypes";
import { MusicService } from "../../services/MusicService";

export function playSong(songId) {
  return async dispatch => {
    const song = await MusicService.getSong(songId);
    dispatch(onPlay(song));
  };
}

export function pauseSong(songId) {
  return async dispatch => {
    const song = await MusicService.getSong(songId);
    dispatch(onPause(song));
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
