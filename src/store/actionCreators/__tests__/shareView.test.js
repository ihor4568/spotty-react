import * as actionCreators from "../shareView";
import * as actionTypes from "../../actionTypes";

import { MusicService } from "../../../services/MusicService";

describe("ShareView action creators", () => {
  describe("addSong", () => {
    it("should return correct action", () => {
      const payload = { prop: 10 };
      const expected = {
        type: actionTypes.GET_SONG_SUCCESS,
        payload
      };
      expect(actionCreators.addSong(payload)).toEqual(expected);
    });
  });

  describe("getSong", () => {
    let promise;
    const dispatchMock = jest.fn();
    let getSong;
    const sampleSongId = {
      song1: {
        id: "123456"
      }
    };

    beforeEach(() => {
      promise = Promise.resolve(sampleSongId);
      getSong = jest
        .spyOn(MusicService, "getSongById")
        .mockImplementation(() => promise);
    });

    it("should dispatch correct action", async () => {
      actionCreators.getSong()(dispatchMock);

      await promise;

      const expected = actionCreators.addSong(sampleSongId);

      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });

    it("should return fail action in case of error", async () => {
      getSong.mockImplementation(() => Promise.reject());

      await actionCreators.getSong()(dispatchMock);

      expect(dispatchMock).toHaveBeenCalledWith({
        type: actionTypes.GET_SONG_FAIL
      });
    });
  });
});
