import { ADD_ALBUM_SONGS } from "../actionTypes";

const initialState = [];

export default function TableLayoutReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ALBUM_SONGS:
      return action.payload;
    // case ADD_SONG:
    //   return action.payload;
    // case REMOVE_SONG:
    //   return action.payload;
    default:
      return state;
  }
}
