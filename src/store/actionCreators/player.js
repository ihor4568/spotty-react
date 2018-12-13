import * as actionTypes from "../actionTypes";

export function playSong(song, number) {
  return {
    type: actionTypes.PLAY_SONG,
    song,
    number
  };
}

export function pauseSong(song, number) {
  return {
    type: actionTypes.PAUSE_SONG,
    song,
    number
  };
}

export function saveSongs(savedSongs, number) {
  return {
    type: actionTypes.SAVE_SONGS,
    savedSongs,
    number
  };
}
