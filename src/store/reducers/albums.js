import { ADD_ALBUMS } from "../actionTypes";

const initialState = [];

export default function albumsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ALBUMS:
      return action.payload;
    default:
      return state;
  }
}
