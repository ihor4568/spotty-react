import * as actionTypes from "../actionTypes";
import { MusicService } from "../../services/MusicService";

export function loadSongs(albumId) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.FETCH_ALBUM_SONGS_START });
      const songs = await MusicService.getAlbumSongs(albumId);
      dispatch(addAlbumSongs(Object.values(songs)));
    } catch (e) {
      dispatch({ type: actionTypes.FETCH_ALBUM_SONGS_FAIL });
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
    }
  };
}

// getState().songs = getState().userSongs;
// console.log(getState().songs);
// console.log(getState().userSongs);
// songs.updateSongs(getState().userSongs);
// console.log("1", getState().songs);
// console.log("2", getState().userSongs);

// export function updateSongs() {
//   return (dispatch, getState) => {
//     dispatch({
//       type: actionTypes.FETCH_ARTISTS_SONGS_SUCCESS,
//       payload: getState().userSongs
//     });
//   };
// }

export function getArtistSongs(payload) {
  return {
    type: actionTypes.FETCH_ARTISTS_SONGS_SUCCESS,
    payload
  };
}
