import { ADD_ALBUMS } from "../actionTypes";

import { MusicService } from "../../services/MusicService";

export function loadAlbums() {
  return async dispatch => {
    const albums = await MusicService.getAllAlbums();
    dispatch(addAlbums(Object.values(albums)));
  };
}

export function addAlbums(payload) {
  return {
    type: ADD_ALBUMS,
    payload
  };
}
