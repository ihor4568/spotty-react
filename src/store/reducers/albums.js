import { ADD_ALBUMS } from "../actionTypes";

const INITIAL_STATE = [];

export default function albumsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ALBUMS:
      return action.payload;
    default:
      return state;
  }
}
