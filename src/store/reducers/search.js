import { ADD_SEARCH_QUERY } from "../actionTypes";

export const INITIAL_STATE = "";

export default function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_SEARCH_QUERY:
      return action.query;
    default:
      return state;
  }
}
