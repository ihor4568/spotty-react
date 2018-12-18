import * as actionTypes from "../../actionTypes";
import avatarReducer, { INITIAL_STATE } from "../avatar";

describe("avatar reducer", () => {
  it("should return initial state at the beginning", () => {
    const result = avatarReducer(undefined, {});
    expect(result).toEqual(INITIAL_STATE);
  });

  it("should handle DISABLE_SIGNUP_BUTTON action", () => {
    const newState = {
      ...INITIAL_STATE,
      canSubmit: false,
      avatarURL: ""
    };

    const result = avatarReducer(INITIAL_STATE, {
      type: actionTypes.DISABLE_SIGNUP_BUTTON
    });

    expect(result).toEqual(newState);
  });

  it("should handle UPLOAD_AVATAR_SUCCESS action", () => {
    const newState = {
      ...INITIAL_STATE,
      canSubmit: true,
      avatarURL: "https://.."
    };

    const result = avatarReducer(INITIAL_STATE, {
      type: actionTypes.UPLOAD_AVATAR_SUCCESS,
      image: "https://.."
    });

    expect(result).toEqual(newState);
  });
});
