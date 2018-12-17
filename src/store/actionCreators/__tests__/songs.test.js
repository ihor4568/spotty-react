import * as actionCreators from "../songs";
import * as actionTypes from "../../actionTypes";

import { MusicService } from "../../../services/MusicService";

describe("songs action creators", () => {
  describe("getArtistSongs", () => {
    it("should return correct action", () => {
      const payload = { prop: 10 };
      const expected = {
        type: actionTypes.FETCH_ARTISTS_SONGS_SUCCESS,
        payload
      };
      expect(actionCreators.getArtistSongs(payload)).toEqual(expected);
    });
  });

  describe("loadArtistsSongs", () => {
    let promise;
    const dispatchMock = jest.fn();
    let loadArtistsSongs;
    const sampleSongs = {
      song1: {
        id: "4th34th",
        name: "artist1"
      }
    };

    beforeEach(() => {
      promise = Promise.resolve(sampleSongs);
      loadArtistsSongs = jest
        .spyOn(MusicService, "getArtistSongs")
        .mockImplementation(() => promise);
    });

    it("should dispatch correct action", async () => {
      actionCreators.loadArtistsSongs()(dispatchMock);

      await promise;

      const expected = actionCreators.getArtistSongs(
        Object.values(sampleSongs)
      );

      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });

    it("should return fail action in case of error", async () => {
      loadArtistsSongs.mockImplementation(() => Promise.reject());

      await actionCreators.loadArtistsSongs()(dispatchMock);

      expect(dispatchMock).toHaveBeenCalledWith({
        type: actionTypes.FETCH_ARTISTS_SONGS_FAIL
      });
    });
  });

  describe("addAlbumSongs", () => {
    it("should return correct action", () => {
      const payload = { prop: 10 };
      const expected = {
        type: actionTypes.FETCH_ALBUM_SONGS_SUCCESS,
        payload
      };
      expect(actionCreators.addAlbumSongs(payload)).toEqual(expected);
    });
  });

  describe("loadAlbumSongs", () => {
    let promise;
    let loadAlbumSongs;
    const dispatchMock = jest.fn();
    const sampleSongs = {
      song1: {
        id: "4th34th",
        name: "artist1"
      }
    };

    beforeEach(() => {
      promise = Promise.resolve(sampleSongs);
      loadAlbumSongs = jest
        .spyOn(MusicService, "getAlbumSongs")
        .mockImplementation(() => promise);
    });

    it("should dispatch correct action", async () => {
      actionCreators.loadAlbumSongs()(dispatchMock);

      await promise;

      const expected = actionCreators.addAlbumSongs(Object.values(sampleSongs));

      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });

    it("should return fail action in case of error", async () => {
      loadAlbumSongs.mockImplementation(() => Promise.reject());

      await actionCreators.loadAlbumSongs()(dispatchMock);

      expect(dispatchMock).toHaveBeenCalledWith({
        type: actionTypes.FETCH_ALBUM_SONGS_FAIL
      });
    });
  });
});
