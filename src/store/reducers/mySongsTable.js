import { ADD_SONGS } from "../actionTypes";

const INITIAL_STATE = [];

export default function mySongsTableReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_SONGS:
      return action.payload;
    default:
      return state;
  }
}
