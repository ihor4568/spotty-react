import albumsReducer, { INITIAL_STATE } from "../albums";
import * as actionTypes from "../../actionTypes";

describe("albums reducer", () => {
  it("should return initial state at the beginning", () => {
    const res = albumsReducer(undefined, {});

    expect(res).toEqual(INITIAL_STATE);
  });

  it("should return action payload in case of ADD_ALBUMS_SUCCESS action", () => {
    const payload = [
      {
        id: "34th37"
      }
    ];
    const action = { type: actionTypes.ADD_ALBUMS_SUCCESS, payload };
    const res = albumsReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });
});
