import * as actionCreators from "../artists";
import * as actionTypes from "../../actionTypes";

import { MusicService } from "../../../services/MusicService";

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
    describe("success", () => {
      let promise;
      const sampleArtists = {
        artis1: {
          id: "4th34th",
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

        await promise;

        const expected = actionCreators.addArtistsFail();

        expect(dispatchMock).toHaveBeenCalledWith(expected);
      });
    });
  });
});

// it("tests error with async/await", async () => {
//   expect.assertions(1);
//   try {
//     await user.getUserName(1);
//   } catch (e) {
//     expect(e).toEqual({
//       error: "User with 1 not found."
//     });
//   }
// });

// it("works with async/await", async () => {
//   expect.assertions(1);
//   const data = await user.getUserName(4);
//   expect(data).toEqual("Mark");
// });

// // async/await can also be used with `.resolves`.
// it("works with async/await and resolves", async () => {
//   expect.assertions(1);
//   await expect(user.getUserName(5)).resolves.toEqual("Paul");
// });
