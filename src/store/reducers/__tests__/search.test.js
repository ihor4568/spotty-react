import { ADD_SEARCH_QUERY } from "../../actionTypes";
import searchReducer, { INITIAL_STATE } from "../search";

describe("search reducer", () => {
  it("should return initial state at the beginning", () => {
    const result = searchReducer(undefined, "");

    expect(result).toEqual(INITIAL_STATE);
  });

  it("should return action payload in case of ADD_SEARCH_QUERY action", () => {
    const action = {
      type: ADD_SEARCH_QUERY,
      query: ""
    };
    const result = searchReducer(INITIAL_STATE, action);
    expect(result).toEqual(action.query);
  });
});
