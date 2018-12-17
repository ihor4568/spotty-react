import ratingReducer, { INITIAL_STATE } from "../rating";
import * as actionTypes from "../../actionTypes";

describe("rating reducer", () => {
  it("should return initial state at the beginning", () => {
    const res = ratingReducer(undefined, {});

    expect(res).toEqual(INITIAL_STATE);
  });

  it("should return action payload in case of FETCH_SONGS_RATING_SUCCESS action", () => {
    const payload = [
      {
        songId: "song1"
      }
    ];
    const action = { type: actionTypes.FETCH_SONGS_RATING_SUCCESS, payload };
    const res = ratingReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return action payload in case of SET_RATING_SONG_SUCCESS action", () => {
    const payload = [
      {
        songId: "song1"
      }
    ];
    const action = { type: actionTypes.SET_RATING_SONG_SUCCESS, payload };
    const res = ratingReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });
});
