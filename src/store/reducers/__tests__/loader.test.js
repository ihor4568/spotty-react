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

  it("should return true in case of ADD_ALBUMS_START", () => {
    const payload = true;
    const action = { type: actionTypes.ADD_ALBUMS_START, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return true in case of ADD_ARTISTS_START", () => {
    const payload = true;
    const action = { type: actionTypes.ADD_ARTISTS_START, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return true in case of FETCH_ALBUM_SONGS_START", () => {
    const payload = true;
    const action = { type: actionTypes.FETCH_ALBUM_SONGS_START, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return true in case of FETCH_ARTISTS_SONGS_START", () => {
    const payload = true;
    const action = { type: actionTypes.FETCH_ARTISTS_SONGS_START, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return true in case of GET_SONG_START", () => {
    const payload = true;
    const action = { type: actionTypes.GET_SONG_START, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of FETCH_USER_SONGS_SUCCESS", () => {
    const payload = false;
    const action = { type: actionTypes.FETCH_USER_SONGS_SUCCESS, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of FETCH_USER_SONGS_FAIL", () => {
    const payload = false;
    const action = { type: actionTypes.FETCH_USER_SONGS_FAIL, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of ADD_ALBUMS_SUCCESS", () => {
    const payload = false;
    const action = { type: actionTypes.ADD_ALBUMS_SUCCESS, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of ADD_ALBUMS_FAIL", () => {
    const payload = false;
    const action = { type: actionTypes.ADD_ALBUMS_FAIL, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of ADD_ARTISTS_SUCCESS", () => {
    const payload = false;
    const action = { type: actionTypes.ADD_ARTISTS_SUCCESS, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of ADD_ARTISTS_FAIL", () => {
    const payload = false;
    const action = { type: actionTypes.ADD_ARTISTS_FAIL, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of FETCH_ALBUM_SONGS_SUCCESS", () => {
    const payload = false;
    const action = { type: actionTypes.FETCH_ALBUM_SONGS_SUCCESS, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of FETCH_ALBUM_SONGS_FAIL", () => {
    const payload = false;
    const action = { type: actionTypes.FETCH_ALBUM_SONGS_FAIL, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of FETCH_ARTISTS_SONGS_SUCCESS", () => {
    const payload = false;
    const action = { type: actionTypes.FETCH_ARTISTS_SONGS_SUCCESS, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of FETCH_ARTISTS_SONGS_FAIL", () => {
    const payload = false;
    const action = { type: actionTypes.FETCH_ARTISTS_SONGS_FAIL, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of SAVE_SONGS", () => {
    const payload = false;
    const action = { type: actionTypes.SAVE_SONGS, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of GET_SONG_SUCCESS", () => {
    const payload = false;
    const action = { type: actionTypes.GET_SONG_SUCCESS, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });

  it("should return false in case of GET_SONG_FAIL", () => {
    const payload = false;
    const action = { type: actionTypes.GET_SONG_FAIL, payload };
    const res = loaderReducer(INITIAL_STATE, action);

    expect(res).toEqual(payload);
  });
});
