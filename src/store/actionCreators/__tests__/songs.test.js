import * as actionCreators from "../songs";
import * as actionTypes from "../../actionTypes";

import { MusicService } from "../../../services/MusicService";

jest.mock("../../../services/FirebaseService");

describe("songs action creators", () => {
  describe("getArtistsSongs", () => {
    it("should return correct action", () => {
      const payload = { prop: 10 };
      const expected = {
        type: actionTypes.FETCH_ARTISTS_SONGS_SUCCESS,
        payload
      };
      expect(actionCreators.getArtistsSongs(payload)).toEqual(expected);
    });
  });

  describe("loadArtistsSongs", () => {
    let promise;
    const sampleSongs = {
      song1: {
        id: "4th34th",
        name: "artist1"
      }
    };

    beforeEach(() => {
      promise = Promise.resolve(sampleSongs);
      jest
        .spyOn(MusicService, "getArtistsSongs")
        .mockImplementation(() => promise);
    });

    it("should dispatch correct action", async () => {
      const dispatchMock = jest.fn();
      actionCreators.loadArtistsSongs()(dispatchMock);

      await promise;

      const expected = actionCreators.getArtistsSongs(
        Object.values(sampleSongs)
      );

      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });
});
