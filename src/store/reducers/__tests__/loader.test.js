import loaderReducer, { INITIAL_STATE } from "../loader";
import * as actionTypes from "../../actionTypes";

describe("Songs reducer", () => {
  it("should return initial state at the beginning", () => {
    const res = loaderReducer(undefined, false);

    expect(res).toEqual(INITIAL_STATE);
  });

  it("should return true in case of FETCH_USER_SONGS_START", () => {
    const payload = true;
    const action = { type: actionTypes.FETCH_USER_SONGS_START, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });
});
