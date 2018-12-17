import * as actionCreators from "../player";
import * as actionTypes from "../../actionTypes";

describe("player action creator", () => {
  describe("playSong", () => {
    it("should return correct action", () => {
      const song = {};
      const expected = {
        type: actionTypes.PLAY_SONG,
        song
      };
      expect(actionCreators.playSong(song)).toEqual(expected);
    });
  });

  describe("pauseSong", () => {
    it("should return correct action", () => {
      const song = {};
      const expected = {
        type: actionTypes.PAUSE_SONG,
        song
      };
      expect(actionCreators.pauseSong(song)).toEqual(expected);
    });
  });

  describe("hidePlayer", () => {
    it("should return correct action", () => {
      const expected = {
        type: actionTypes.HIDE_PLAYER
      };
      expect(actionCreators.hidePlayer()).toEqual(expected);
    });
  });

  describe("saveSongs", () => {
    it("should return correct action", () => {
      const savedSongs = {};
      const expected = {
        type: actionTypes.SAVE_SONGS,
        savedSongs
      };
      expect(actionCreators.saveSongs(savedSongs)).toEqual(expected);
    });
  });
});
