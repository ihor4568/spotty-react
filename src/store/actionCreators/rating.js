import * as actionTypes from "../actionTypes";

import { MusicService } from "../../services/MusicService";

export function loadSongsRating(userId) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.FETCH_SONGS_RATING_START });
      const songsRating = await MusicService.getSongRating(userId);
      dispatch({
        type: actionTypes.FETCH_SONGS_RATING_SUCCESS,
        payload: songsRating
      });
    } catch (e) {
      dispatch({ type: actionTypes.FETCH_SONGS_RATING_FAIL });
    }
  };
}

export function setNewRatingForSong(userId, songId, ratingValue) {
  return async dispatch => {
    const newRating = MusicService.setNewSongRating(
      userId,
      songId,
      ratingValue
    );
    dispatch({
      type: actionTypes.SET_RATING_SONG,
      payload: newRating
    });
    dispatch(loadSongsRating(userId));
  };
}
