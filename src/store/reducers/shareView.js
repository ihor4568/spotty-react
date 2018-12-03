import { ADD_SONG } from "../actionTypes";

const INITIAL_STATE = null;

export default function shareViewReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_SONG:
      return action.song;
    default:
      return state;
  }
}
