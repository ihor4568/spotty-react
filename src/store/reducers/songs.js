import { ARTISTS_SONGS } from "../actionTypes";

const INITIAL_STATE = [];

export default function songsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ARTISTS_SONGS:
      return action.payload;
    default:
      return state;
  }
}
