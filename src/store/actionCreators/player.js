import * as actionTypes from "../actionTypes";

export function playSong(song, id) {
  return {
    type: actionTypes.PLAY_SONG,
    song: song,
    id
  };
}

export function pauseSong(song, id) {
  return {
    type: actionTypes.PAUSE_SONG,
    song,
    id
  };
}
