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
        isPlaying: true,
        id: action.id
      };
    case actionTypes.PAUSE_SONG:
      return {
        ...state,
        song: action.song,
        isPlaying: false,
        id: action.id
      };
    default:
      return state;
  }
}
