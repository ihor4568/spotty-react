import * as actionCreators from "../auth";
import * as actionTypes from "../../actionTypes";

import { AuthService } from "../../../services/AuthService";

jest.mock("../../../services/AuthService");

describe("auth action creators", () => {
  describe("signIn", () => {
    let promise;
    const sampleUser = {
      user1: {
        email: "random",
        password: "qwerty"
      }
    };

    beforeEach(() => {
      promise = Promise.resolve({ user: sampleUser });
      jest.spyOn(AuthService, "signIn").mockImplementation(() => promise);
    });

    it("should dispatch correct action", async () => {
      const dispatchMock = jest.fn();
      actionCreators.signIn(sampleUser)(dispatchMock);

      await promise;

      const expected = {
        type: actionTypes.USER_FETCHED_SUCCESS,
        user: sampleUser
      };

      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });

    afterEach(() => {
      AuthService.signIn.mockRestore();
    });
  });

  describe("signUp", () => {
    let promise;
    let promiseCheck;
    const sampleUser = {
      user1: {
        email: "random",
        password: "qwerty",
        name: "somebody"
      }
    };

    beforeEach(() => {
      promise = Promise.resolve({ user: sampleUser });
      promiseCheck = Promise.resolve();
      jest.spyOn(AuthService, "signUp").mockImplementation(() => promise);
      jest.spyOn(AuthService, "check").mockImplementation(() => promiseCheck);
    });

    it("should dispatch correct action", async () => {
      const dispatchMock = jest.fn();
      actionCreators.signUp(sampleUser)(dispatchMock);

      await promise;
      await promiseCheck;

      const expectedStart = { type: actionTypes.USER_FETCHED_START };
      const expectedSuccess = { type: actionTypes.USER_FETCHED_SUCCESS };

      expect(dispatchMock).toHaveBeenCalledWith(expectedStart);
      expect(dispatchMock).toHaveBeenCalledWith(expectedSuccess);
    });

    afterEach(() => {
      AuthService.check.mockRestore();
      AuthService.signUp.mockRestore();
    });
  });
});
