import { ADD_SONGS } from "../actionTypes";
import { PLAY_SONG } from "../actionTypes";

const INITIAL_STATE = [];

export default function mySongsTableReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_SONGS:
      return action.payload;
    case PLAY_SONG:
      return action.payload;
    default:
      return state;
  }
}
