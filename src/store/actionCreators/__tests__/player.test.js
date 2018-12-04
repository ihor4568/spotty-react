import * as actionCreators from "../player";
import * as actionTypes from "../../actionTypes";

describe("player action creator", () => {
  describe("playSong", () => {
    it("should dispatch correct action", () => {
      const dispatchMock = jest.fn();
      actionCreators.playSong({})(dispatchMock);
      const expected = actionCreators.onPlay({});
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });

  describe("pauseSong", () => {
    it("should dispatch correct action", () => {
      const dispatchMock = jest.fn();
      actionCreators.pauseSong({})(dispatchMock);
      const expected = actionCreators.onPause({});
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });

  describe("onPlay", () => {
    it("should return correct action", () => {
      const payload = {};
      const expected = {
        type: actionTypes.ON_PLAY,
        payload
      };
      expect(actionCreators.onPlay(payload)).toEqual(expected);
    });
  });

  describe("onPause", () => {
    it("should return correct action", () => {
      const payload = {};
      const expected = {
        type: actionTypes.ON_PLAY,
        payload
      };
      expect(actionCreators.onPlay(payload)).toEqual(expected);
    });
  });
});
