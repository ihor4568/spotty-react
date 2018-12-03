import { ON_PLAY } from "../actionTypes";
import { ON_PAUSE } from "../actionTypes";

const INITIAL_STATE = {
  isPlaying: false,
  payload: {}
};

export default function playerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ON_PLAY:
      return {
        ...state,
        payload: action.payload,
        isPlaying: true
      };
    case ON_PAUSE:
      return {
        ...state,
        payload: action.payload,
        isPlaying: false
      };
    default:
      return state;
  }
}
