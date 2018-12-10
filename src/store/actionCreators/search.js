import { ADD_SEARCH_QUERY } from "../actionTypes";

export function addSearchQuery(value) {
  return {
    type: ADD_SEARCH_QUERY,
    query: value
  };
}
