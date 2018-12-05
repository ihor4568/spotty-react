import * as ationTypes from "../actionTypes";

const INITIAL_STATE = [];

export default function songsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ationTypes.FETCH_ARTISTS_SONGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
