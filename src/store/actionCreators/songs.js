import * as actionTypes from "../actionTypes";
import { MusicService } from "../../services/MusicService";
import history from "../../history";

export function loadSongs(albumId) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.FETCH_ALBUM_SONGS_START });
      const songs = await MusicService.getAlbumSongs(albumId);
      dispatch(addAlbumSongs(Object.values(songs)));
    } catch (e) {
      dispatch({ type: actionTypes.FETCH_ALBUM_SONGS_FAIL });
      history.push("/404");
    }
  };
}

export function addAlbumSongs(payload) {
  return {
    type: actionTypes.FETCH_ALBUM_SONGS_SUCCESS,
    payload
  };
}

export function loadArtistsSongs(artist) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.FETCH_ARTISTS_SONGS_START });
      const songs = await MusicService.getArtistSongs(artist);
      dispatch(getArtistSongs(Object.values(songs)));
    } catch (e) {
      dispatch({ type: actionTypes.FETCH_ARTISTS_SONGS_FAIL });
      history.push("/404");
    }
  };
}

export function getArtistSongs(payload) {
  return {
    type: actionTypes.FETCH_ARTISTS_SONGS_SUCCESS,
    payload
  };
}
