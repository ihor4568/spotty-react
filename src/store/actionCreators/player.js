import * as actionTypes from "../actionTypes";

export function playSong(song, number) {
  return {
    type: actionTypes.PLAY_SONG,
    song,
    number
  };
}

export function pauseSong(song) {
  return {
    type: actionTypes.PAUSE_SONG,
    song
  };
}

export function saveSongs(savedSongs, number) {
  return {
    type: actionTypes.SAVE_SONGS,
    savedSongs,
    number
  };
}
