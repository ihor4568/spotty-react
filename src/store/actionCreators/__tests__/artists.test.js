import * as actionCreators from "../artists";
import * as actionTypes from "../../actionTypes";

import { MusicService } from "../../../services/MusicService";

jest.mock("../../../services/FirebaseService");

describe("artists action creators", () => {
  describe("loadArtists", () => {
    describe("success", () => {
      let promise;
      const sampleArtists = {
        artist1: {
          id: "sdfgsdfgs",
          name: "artist1"
        }
      };

      beforeEach(() => {
        promise = Promise.resolve(sampleArtists);
        jest
          .spyOn(MusicService, "getAllArtists")
          .mockImplementation(() => promise);
      });

      it("should dispatch success action", async () => {
        const dispatchMock = jest.fn();
        actionCreators.loadArtists()(dispatchMock);

        await promise;

        const expected = actionCreators.addArtists(
          Object.values(sampleArtists)
        );

        expect(dispatchMock).toHaveBeenCalledWith(expected);
      });
    });

    describe("failure", () => {
      let promise;
      const sampleError = "this is error";

      beforeEach(() => {
        promise = Promise.reject(sampleError);
        jest
          .spyOn(MusicService, "getAllArtists")
          .mockImplementation(() => promise);
      });

      it("should dispatch fail action", async () => {
        const dispatchMock = jest.fn();
        actionCreators.loadArtists()(dispatchMock);
        try {
          await promise;
        } catch (e) {
          const expected = actionCreators.addArtistsFail();
          expect(dispatchMock).toHaveBeenCalledWith(expected);
        }
      });
    });
  });

  describe("addArtists", () => {
    it("should return correct action", () => {
      const payload = { prop: 10 };
      const expected = {
        type: actionTypes.ADD_ARTISTS_SUCCESS,
        payload
      };
      expect(actionCreators.addArtists(payload)).toEqual(expected);
    });
  });

  describe("addArtistsFail", () => {
    it("should return fail action", () => {
      const expected = {
        type: actionTypes.ADD_ARTISTS_FAIL
      };
      expect(actionCreators.addArtistsFail()).toEqual(expected);
    });
  });

  describe("loadCachedArtists", () => {
    it("should dispatch loadArtist", () => {
      const dispatchMock = jest.fn();
      const getStateMock = () => {
        return {
          artists: []
        };
      };
      actionCreators.loadCachedArtists()(dispatchMock, getStateMock);
      expect(dispatchMock).toHaveBeenCalled();
    });

    it("should not dispatch loadArtist", () => {
      const dispatchMock = jest.fn();
      const getStateMock = () => {
        return {
          artists: [1]
        };
      };
      actionCreators.loadCachedArtists()(dispatchMock, getStateMock);
      expect(dispatchMock).not.toHaveBeenCalled();
    });
  });
});
