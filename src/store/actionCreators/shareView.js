import { ADD_SONG } from "../actionTypes";
import { MusicService } from "../../services/MusicService";

export const addSong = song => ({
  type: ADD_SONG,
  song
});

export const getSong = id => {
  return dispatch => {
    MusicService.getSong(id).then(song => {
      dispatch(addSong(song));
    });
  };
};
