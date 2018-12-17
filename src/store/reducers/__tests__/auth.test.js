import * as actionTypes from "../../actionTypes";
import authReducer, { INITIAL_STATE } from "../auth";

describe("auth reducer", () => {
  it("should return initial state at the beginning", () => {
    const result = authReducer(undefined, {});
    expect(result).toEqual(INITIAL_STATE);
  });

  it("should handle FETCH_USER_AND_THEME_SUCCESS action", () => {
    const newState = {
      ...INITIAL_STATE,
      isLoggedIn: true,
      user: { id: 5 },
      isLoaded: true,
      error: ""
    };

    const result = authReducer(INITIAL_STATE, {
      type: actionTypes.FETCH_USER_AND_THEME_SUCCESS,
      user: { id: 5 }
    });

    expect(result).toEqual(newState);
  });

  it("should handle FETCH_USER_AND_THEME_FAIL action", () => {
    const newState = {
      ...INITIAL_STATE,
      isLoggedIn: false,
      isLoaded: true
    };

    const result = authReducer(INITIAL_STATE, {
      type: actionTypes.FETCH_USER_AND_THEME_FAIL
    });

    expect(result).toEqual(newState);
  });

  it("should handle SIGN_IN_SUCCESS action", () => {
    const newState = {
      ...INITIAL_STATE,
      isLoggedIn: true,
      user: { id: 5 },
      isLoaded: true,
      error: ""
    };

    const result = authReducer(INITIAL_STATE, {
      type: actionTypes.SIGN_IN_SUCCESS,
      user: { id: 5 }
    });

    expect(result).toEqual(newState);
  });

  it("should handle SIGN_UP_SUCCESS action", () => {
    const newState = {
      ...INITIAL_STATE,
      isLoggedIn: true,
      user: { id: 5 },
      isLoaded: true,
      error: ""
    };

    const result = authReducer(INITIAL_STATE, {
      type: actionTypes.SIGN_UP_SUCCESS,
      user: { id: 5 }
    });

    expect(result).toEqual(newState);
  });

  it("should handle SIGN_OUT action", () => {
    const newState = {
      ...INITIAL_STATE,
      isLoggedIn: false,
      user: null,
      isLoaded: true
    };

    const result = authReducer(INITIAL_STATE, {
      type: actionTypes.SIGN_OUT_SUCCESS
    });

    expect(result).toEqual(newState);
  });

  it("should handle AUTH_ERROR action", () => {
    const newState = {
      ...INITIAL_STATE,
      error: "Error"
    };

    const result = authReducer(INITIAL_STATE, {
      type: actionTypes.AUTH_ERROR,
      error: "Error"
    });

    expect(result).toEqual(newState);
  });

  it("should handle CLEAR_AUTH_ERROR action", () => {
    const newState = {
      ...INITIAL_STATE,
      error: ""
    };

    const result = authReducer(INITIAL_STATE, {
      type: actionTypes.CLEAR_AUTH_ERROR
    });

    expect(result).toEqual(newState);
  });
});
