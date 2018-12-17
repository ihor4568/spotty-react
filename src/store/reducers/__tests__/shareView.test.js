import shareViewReducer, { INITIAL_STATE } from "../shareView";
import * as actionTypes from "../../actionTypes";

describe("ShareView reducer", () => {
  it("should return initial state at the beginning", () => {
    const res = shareViewReducer(undefined, {});

    expect(res).toEqual(INITIAL_STATE);
  });

  it("should return action payload in case of GET_SONG_SUCCESS", () => {
    const payload = [
      {
        id: "123456"
      }
    ];
    const action = { type: actionTypes.GET_SONG_SUCCESS, payload };
    const res = shareViewReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });
});
