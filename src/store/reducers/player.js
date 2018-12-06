import { PLAY_SONG } from "../actionTypes";
import { PAUSE_SONG } from "../actionTypes";

export const INITIAL_STATE = {
  isPlaying: false,
  song: {}
};

export default function playerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        song: action.song,
        isPlaying: true
      };
    case PAUSE_SONG:
      return {
        ...state,
        song: action.song,
        isPlaying: false
      };
    default:
      return state;
  }
}
