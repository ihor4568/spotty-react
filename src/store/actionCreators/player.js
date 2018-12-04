import { ON_PLAY } from "../actionTypes";
import { ON_PAUSE } from "../actionTypes";

export function playSong(song) {
  return dispatch => {
    dispatch(onPlay(song));
  };
}

export function pauseSong(song) {
  return dispatch => {
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
