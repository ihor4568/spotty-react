import artistsReducer, { INITIAL_STATE } from "../artists";
import * as actionTypes from "../../actionTypes";

describe("artists reducer", () => {
  it("should return initial state at the beginning", () => {
    const res = artistsReducer(undefined, {});

    expect(res).toEqual(INITIAL_STATE);
  });

  it("should return action payload in case of ADD_ARTISTS_SUCCESS action", () => {
    const payload = [
      {
        id: "something"
      }
    ];
    const action = { type: actionTypes.ADD_ARTISTS_SUCCESS, payload };
    const res = artistsReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });
});
