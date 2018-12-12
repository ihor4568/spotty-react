import * as actionCreators from "../artists";
import * as actionTypes from "../../actionTypes";

import { MusicService } from "../../../services/MusicService";

jest.mock("../../../services/FirebaseService");

describe("artists action creators", () => {
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

  describe("loadArtists", () => {
    let promise;
    const sampleAritsts = {
      artist1: {
        id: "4th34th",
        name: "artist1"
      }
    };

    beforeEach(() => {
      promise = Promise.resolve(sampleAritsts);
      jest
        .spyOn(MusicService, "getAllArtists")
        .mockImplementation(() => promise);
    });

    it("should dispatch correct action", async () => {
      const dispatchMock = jest.fn();
      actionCreators.loadArtists()(dispatchMock);

      await promise;

      const expected = actionCreators.addArtists(Object.values(sampleAritsts));

      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });
});
