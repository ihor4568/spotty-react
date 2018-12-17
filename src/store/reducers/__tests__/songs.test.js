import songsReducer, { INITIAL_STATE } from "../songs";
import * as actionTypes from "../../actionTypes";

describe("Songs reducer", () => {
  it("should return initial state at the beginning", () => {
    const res = songsReducer(undefined, {});

    expect(res).toEqual(INITIAL_STATE);
  });

  it("should return action payload in case of FETCH_ALBUM_SONGS_SUCCESS", () => {
    const payload = [
      {
        id: "123456"
      }
    ];
    const action = { type: actionTypes.FETCH_ALBUM_SONGS_SUCCESS, payload };
    const res = songsReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return action payload in case of FETCH_ARTISTS_SONGS_SUCCESS", () => {
    const payload = [
      {
        id: "123456"
      }
    ];
    const action = { type: actionTypes.FETCH_ARTISTS_SONGS_SUCCESS, payload };
    const res = songsReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });
});
