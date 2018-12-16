import themeReducer, { initialState } from "../themes";
import * as actionTypes from "../../actionTypes";

describe("theme reducer", () => {
  describe("initial state", () => {
    it("should match initial state", () => {
      const result = themeReducer(undefined, {});

      expect(result).toEqual(initialState);
    });
  });

  describe(`SET_USER_THEME_SUCCESS action`, () => {
    it("should set correct theme type", () => {
      const actionMock = {
        type: actionTypes.SET_USER_THEME_SUCCESS,
        themeType: "test"
      };
      const result = themeReducer(initialState, actionMock);

      expect(result.themeType).toEqual(actionMock.themeType);
    });
  });

  describe(`FETCH_USER_AND_THEME_SUCCESS action`, () => {
    it("should fetch theme type", () => {
      const actionMock = {
        type: actionTypes.FETCH_USER_AND_THEME_SUCCESS,
        themeType: "test"
      };
      const result = themeReducer(initialState, actionMock);

      expect(result.themeType).toEqual(actionMock.themeType);
    });
  });

  describe(`SET_DEFAULT_THEME action`, () => {
    it("should set default theme type", () => {
      const actionMock = {
        type: actionTypes.SET_DEFAULT_THEME
      };

      const result = themeReducer(initialState, actionMock);

      expect(result).toEqual(initialState);
    });
  });
});
