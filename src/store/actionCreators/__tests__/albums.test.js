import * as actionCreators from "../albums";
import * as actionTypes from "../../actionTypes";

import { MusicService } from "../../../services/MusicService";

describe("albums action creators", () => {
  describe("loadAlbums", () => {
    describe("success", () => {
      let promise;
      const sampleAlbums = {
        album1: {
          id: "sdfgsdfgs",
          name: "artist1"
        }
      };

      beforeEach(() => {
        promise = Promise.resolve(sampleAlbums);
        jest
          .spyOn(MusicService, "getAllAlbums")
          .mockImplementation(() => promise);
      });

      it("should dispatch success action", async () => {
        const dispatchMock = jest.fn();
        actionCreators.loadAlbums()(dispatchMock);

        await promise;

        const expected = actionCreators.addAlbums(Object.values(sampleAlbums));

        expect(dispatchMock).toHaveBeenCalledWith(expected);
      });
    });

    describe("failure", () => {
      let promise;
      const sampleError = "this is error";

      beforeEach(() => {
        promise = Promise.reject(sampleError);
        jest
          .spyOn(MusicService, "getAllAlbums")
          .mockImplementation(() => promise);
      });

      it("should dispatch fail action", async () => {
        const dispatchMock = jest.fn();
        actionCreators.loadAlbums()(dispatchMock);
        try {
          await promise;
        } catch (e) {
          const expected = actionCreators.addAlbumsFail();
          expect(dispatchMock).toHaveBeenCalledWith(expected);
        }
      });
    });
  });

  describe("addAlbums", () => {
    it("should return correct action", () => {
      const payload = { prop: 10 };
      const expected = {
        type: actionTypes.ADD_ALBUMS_SUCCESS,
        payload
      };
      expect(actionCreators.addAlbums(payload)).toEqual(expected);
    });
  });

  describe("addAlbumsFail", () => {
    it("should return fail action", () => {
      const expected = {
        type: actionTypes.ADD_ALBUMS_FAIL
      };
      expect(actionCreators.addAlbumsFail()).toEqual(expected);
    });
  });

  describe("loadCachedAlbums", () => {
    it("should dispatch loadAlbums", () => {
      const dispatchMock = jest.fn();
      const getStateMock = () => {
        return {
          albums: []
        };
      };
      actionCreators.loadCachedAlbums()(dispatchMock, getStateMock);
      expect(dispatchMock).toHaveBeenCalled();
    });

    it("should not dispatch loadAlbums", () => {
      const dispatchMock = jest.fn();
      const getStateMock = () => {
        return {
          albums: [1]
        };
      };
      actionCreators.loadCachedAlbums()(dispatchMock, getStateMock);
      expect(dispatchMock).not.toHaveBeenCalled();
    });
  });
});
