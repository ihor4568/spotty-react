import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = {
  isPlaying: false,
  song: {},
  number: null,
  savedSongs: {}
};

export default function playerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.PLAY_SONG:
      return {
        ...state,
        song: action.song,
        isPlaying: true,
        number: action.number
      };
    case actionTypes.PAUSE_SONG:
      return {
        ...state,
        song: action.song,
        isPlaying: false
      };
    case actionTypes.SAVE_SONGS:
      return {
        ...state,
        savedSongs: action.savedSongs
      };
    default:
      return state;
  }
}
