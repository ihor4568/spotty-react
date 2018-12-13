import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = [];

export default function ratingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_SONGS_RATING_SUCCESS:
    case actionTypes.SET_RATING_SONG:
      return action.payload;
    default:
      return state;
  }
}
