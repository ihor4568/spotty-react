import { PLAY_SONG } from "../actionTypes";
import { PAUSE_SONG } from "../actionTypes";

export function playSong(song) {
  return {
    type: PLAY_SONG,
    song
  };
}

export function pauseSong(song) {
  return {
    type: PAUSE_SONG,
    song
  };
}
