import { ADD_ARTISTS } from "../actionTypes";

import { MusicService } from "../../services/MusicService";

export function loadArtists(payload) {
  return async dispatch => {
    const artists = await MusicService.getAllArtists();
    dispatch(addArtists(Object.values(artists)));
  };
}

export function addArtists(payload) {
  return {
    type: ADD_ARTISTS,
    payload
  };
}
