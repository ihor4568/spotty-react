import userSongsReducer, { INITIAL_STATE } from "../userSongs";
import * as actionTypes from "../../actionTypes";

describe("userSongs reducer", () => {
  it("should return initial state at the beginning", () => {
    const res = userSongsReducer(undefined, {});

    expect(res).toEqual(INITIAL_STATE);
  });

  it("should return action payload in case of FETCH_USER_SONGS_SUCCESS action", () => {
    const payload = [
      {
        songId: "song1",
        name: "someonename"
      }
    ];
    const action = { type: actionTypes.FETCH_USER_SONGS_SUCCESS, payload };
    const res = userSongsReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return action payload in case of ADD_USER_SONG_SUCCESS action", () => {
    const payload = [
      {
        songId: "song1",
        name: "someonename"
      }
    ];
    const action = { type: actionTypes.ADD_USER_SONG_SUCCESS, payload };
    const res = userSongsReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return action payload in case of REMOVE_USER_SONG_SUCCESS action", () => {
    const payload = [
      {
        songId: "song1",
        name: "someonename"
      }
    ];
    const action = { type: actionTypes.REMOVE_USER_SONG_SUCCESS, payload };
    const res = userSongsReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });
});
