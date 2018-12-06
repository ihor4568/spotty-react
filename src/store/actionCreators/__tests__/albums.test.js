import * as actionCreators from "../albums";
import * as actionTypes from "../../actionTypes";

import { MusicService } from "../../../services/MusicService";

jest.mock("../../../services/FirebaseService");

describe("albums action creators", () => {
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

  describe("loadCachedAlbums", () => {
    let promise;
    const sampleAlbums = {
      album1: {
        id: "4th34th",
        name: "album1"
      }
    };

    beforeEach(() => {
      promise = Promise.resolve(sampleAlbums);
      jest
        .spyOn(MusicService, "getAllAlbums")
        .mockImplementation(() => promise);
    });

    it("should dispatch correct action", async () => {
      const dispatchMock = jest.fn();
      actionCreators.loadCachedAlbums()(dispatchMock);

      await promise;

      const expected = actionCreators.addAlbums(Object.values(sampleAlbums));

      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });
});
