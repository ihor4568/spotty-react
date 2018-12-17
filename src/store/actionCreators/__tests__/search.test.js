import { ADD_SEARCH_QUERY } from "../../actionTypes";
import { addSearchQuery } from "../search";

describe("search action creator", () => {
  it("should return correct action", () => {
    const query = "abc";
    const expected = {
      type: ADD_SEARCH_QUERY,
      query
    };

    const result = addSearchQuery(query);
    expect(result).toEqual(expected);
  });
});
