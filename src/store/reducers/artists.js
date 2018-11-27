import { ADD_ARTISTS } from "../actionTypes";

const initialState = [];

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTISTS:
      return action.payload;
    default:
      return state;
  }
}
