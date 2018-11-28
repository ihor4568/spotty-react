import { ADD_ARTISTS } from "../actionTypes";

const INITIAL_STATE = [];

export default function artistsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ARTISTS:
      return action.payload;
    default:
      return state;
  }
}
