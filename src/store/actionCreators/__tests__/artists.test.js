import * as actionCreators from "../artists";
import * as actionTypes from "../../actionTypes";

import { MusicService } from "../../../services/MusicService";

describe("artists action creators", () => {
  describe("addArtists", () => {
    it("should return correct action", () => {
      const payload = { prop: 20 };
      const expected = {
        type: actionTypes.ADD_ARTISTS_SUCCESS,
        payload
      };
      expect(actionCreators.addArtists(payload)).toEqual(expected);
    });
  });

  describe("loadArtists", () => {
    describe("success", () => {
      let promise;
      const sampleArtists = {
        album1: {
          id: "adfasdfd",
          name: "artist1"
        }
      };

      beforeEach(() => {
        promise = Promise.resolve(sampleArtists);
        jest
          .spyOn(MusicService, "getAllArtists")
          .mockImplementation(() => promise);
      });

      it("should dispatch correct action", async () => {
        const dispatchMock = jest.fn();
        actionCreators.loadArtists()(dispatchMock);

        await promise;

        const expected = actionCreators.addArtists(
          Object.values(sampleArtists)
        );

        expect(dispatchMock).toHaveBeenCalledWith(expected);
      });
    });
    describe("fail", () => {
      let promise;
      const errorMessage = "error";

      beforeEach(() => {
        promise = Promise.reject(errorMessage);
        jest
          .spyOn(MusicService, "getAllArtists")
          .mockImplementation(() => promise);
      });

      it("should dispatch fail action", async () => {
        const dispatchMock = jest.fn();
        actionCreators.loadArtists()(dispatchMock);
        await promise;

        const expected = {
          type: actionTypes.ADD_ARTISTS_FAIL
        };

        expect(dispatchMock).toHaveBeenCalledWith(expected);
      });
    });
  });
});
