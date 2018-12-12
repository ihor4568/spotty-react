import * as actionTypes from "../actionTypes";

export function playSong(song, number) {
  return {
    type: actionTypes.PLAY_SONG,
    song: song,
    number
  };
}

export function pauseSong(song, number) {
  return {
    type: actionTypes.PAUSE_SONG,
    song: song,
    number
  };
}
