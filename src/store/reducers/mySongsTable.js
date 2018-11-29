import { ADD_SONGS } from "../actionTypes";

const initialState = [];

export default function mySongsTableReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SONGS:
      return action.payload;
    default:
      return state;
  }
}
