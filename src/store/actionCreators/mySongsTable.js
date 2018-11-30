import { ADD_SONGS } from "../actionTypes";
import { PLAY_SONG } from "../actionTypes";
import { ON_PLAY } from "../actionTypes";
import { ON_PAUSE } from "../actionTypes";
import { MusicService } from "../../services/MusicService";

export function loadSongs(payload) {
  return async dispatch => {
    const songs = await MusicService.getAlbumsSongs("album1");
    dispatch(addSongs(Object.values(songs)));
  };
}

export function addSongs(payload) {
  return {
    type: ADD_SONGS,
    payload
  };
}

export function playSong(playingIndex) {
  return {
    type: PLAY_SONG,
    playingIndex
  };
}

export function onPlay() {
  return {
    type: ON_PLAY
  };
}

export function onPause() {
  return {
    type: ON_PAUSE
  };
}
