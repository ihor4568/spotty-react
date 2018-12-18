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
      const payload = {
        themeType: "test"
      };

      const { themeType } = payload;
      const action = { type: actionTypes.SET_USER_THEME_SUCCESS, themeType };
      const result = themeReducer(initialState, action);

      expect(result).toEqual(payload);
    });
  });

  describe(`FETCH_USER_AND_THEME_SUCCESS action`, () => {
    it("should fetch theme type", () => {
      const payload = {
        themeType: "test"
      };

      const { themeType } = payload;
      const action = {
        type: actionTypes.FETCH_USER_AND_THEME_SUCCESS,
        themeType
      };
      const result = themeReducer(initialState, action);

      expect(result).toEqual(payload);
    });
  });

  describe(`SIGN_IN_SUCCESS action`, () => {
    it("should sign in", () => {
      const payload = {
        themeType: "test"
      };

      const { themeType } = payload;
      const action = {
        type: actionTypes.SIGN_IN_SUCCESS,
        themeType
      };
      const result = themeReducer(initialState, action);

      expect(result).toEqual(payload);
    });
  });

  describe(`SET_DEFAULT_THEME action`, () => {
    it("should set default theme type", () => {
      const action = { type: actionTypes.SET_DEFAULT_THEME };
      const result = themeReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe(`FETCH_USER_AND_THEME_FAIL action`, () => {
    it("should fail theme type", () => {
      const action = { type: actionTypes.FETCH_USER_AND_THEME_FAIL };
      const result = themeReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });
});
