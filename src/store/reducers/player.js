import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = {
  isPlaying: false,
  song: {},
  id: null
};

export default function playerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.PLAY_SONG:
      return {
        ...state,
        song: action.song,
        isPlaying: true
      };
    case actionTypes.PAUSE_SONG:
      return {
        ...state,
        song: action.songs[action.id],
        isPlaying: false
        // id: action.id
      };
    case actionTypes.PREVIOUS_SONG:
      return {
        ...state,
        song: action.songs[action.id],
        isPlaying: true
        // id: action.id - 1
      };
    case actionTypes.NEXT_SONG:
      return {
        ...state,
        song: action.songs[action.id],
        isPlaying: true
        // id: action.id + 1
      };
    default:
      return state;
  }
}
