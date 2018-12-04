import playerReducer, { INITIAL_STATE } from "../player";
import * as actionTypes from "../../actionTypes";

describe("player reducer", () => {
  it("should return initial state at the beginning", () => {
    const result = playerReducer(undefined, {});
    expect(result).toEqual(INITIAL_STATE);
  });

  it("should return Object in case of ON_PLAY action", () => {
    const obj = {
      isPlaying: true,
      payload: {}
    };
    const { payload } = obj;
    const action = { type: actionTypes.ON_PLAY, payload };
    const result = playerReducer(INITIAL_STATE, action);
    expect(result).toEqual(obj);
  });

  it("should return Object in case of ON_PAUSE action", () => {
    const obj = {
      isPlaying: false,
      payload: {}
    };
    const { payload } = obj;
    const action = { type: actionTypes.ON_PAUSE, payload };
    const result = playerReducer(INITIAL_STATE, action);
    expect(result).toEqual(obj);
  });
});
