import * as actionCreators from "../auth";
import * as actionTypes from "../../actionTypes";
import { AuthService } from "../../../services/AuthService";
import { ThemeService } from "../../../services/ThemeService";

jest.mock("../../../services/FirebaseService");

describe("auth action creators", () => {
  describe("signIn action creator", () => {
    let dispatch;
    let signIn;
    let getTheme;
    let signInParams;

    beforeEach(() => {
      dispatch = jest.fn();
      signIn = jest
        .spyOn(AuthService, "signIn")
        .mockImplementation(() => Promise.resolve({ user: { uid: 1 } }));
      getTheme = jest
        .spyOn(ThemeService, "getTheme")
        .mockImplementation(() => Promise.resolve("light"));
      signInParams = {
        email: "example@mail.com",
        password: "123456"
      };
    });

    it("should return correct start action", () => {
      actionCreators.signIn(signInParams)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.SIGN_IN_START
      });
    });

    it("should return signIn success action if signIn completes successfully", async () => {
      const { email, password } = signInParams;

      await actionCreators.signIn(signInParams)(dispatch);

      expect(signIn).toHaveBeenCalledWith(email, password);
      expect(getTheme).toHaveBeenCalledWith(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.SIGN_IN_SUCCESS,
        user: { uid: 1 },
        themeType: "light"
      });
    });

    it("should return correct AUTH_ERROR action if signIn service fails", async () => {
      signIn.mockImplementation(() =>
        Promise.reject({ message: "Sign in error" })
      );

      await actionCreators.signIn(signInParams)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.AUTH_ERROR,
        error: "Sign in error"
      });
    });

    it("should return correct AUTH_ERROR action if getTheme service fails", async () => {
      getTheme.mockImplementation(() =>
        Promise.reject({ message: "Get Theme error" })
      );

      await actionCreators.signIn(signInParams)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.AUTH_ERROR,
        error: "Get Theme error"
      });
    });
  });
  describe("signOut action creator", () => {
    let dispatch;
    let signOut;

    beforeEach(() => {
      dispatch = jest.fn();
      signOut = jest
        .spyOn(AuthService, "signOut")
        .mockImplementation(() => Promise.resolve());
    });

    it("should return correct start action", () => {
      actionCreators.signOut()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.SIGN_OUT_START
      });
    });

    it("should call signOut service", async () => {
      actionCreators.signOut()(dispatch);

      expect(signOut).toHaveBeenCalled();
    });

    it("should return correct success action", async () => {
      await actionCreators.signOut()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.SIGN_OUT_SUCCESS
      });
    });

    it("should return correct fail action", async () => {
      signOut.mockImplementation(() => Promise.reject());

      await actionCreators.signOut()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.SIGN_OUT_FAIL
      });
    });
  });

  describe("signUp action creator", () => {
    let dispatch;
    let signUp;
    let check;
    let signUpParams;

    beforeEach(() => {
      dispatch = jest.fn();
      signUp = jest
        .spyOn(AuthService, "signUp")
        .mockImplementation(() => Promise.resolve());
      check = jest
        .spyOn(AuthService, "check")
        .mockImplementation(() => Promise.resolve({ id: 1 }));
      signUpParams = {
        email: "example@mail.com",
        password: "123456",
        name: "John",
        avatarURL: "http://example.com/john.jpg"
      };
    });

    it("should return correct start action", () => {
      actionCreators.signUp(signUpParams)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.SIGN_UP_START
      });
    });

    it("should return signUp success action if signUp completes successfully", async () => {
      const { email, password, name, avatarURL } = signUpParams;

      await actionCreators.signUp(signUpParams)(dispatch);

      expect(signUp).toHaveBeenCalledWith(email, password, name, avatarURL);
      expect(check).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.SIGN_UP_SUCCESS,
        user: { id: 1 }
      });
    });

    it("should return correct AUTH_ERROR action if signUp service fails", async () => {
      signUp.mockImplementation(() =>
        Promise.reject({ message: "Sign up error" })
      );

      await actionCreators.signUp(signUpParams)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.AUTH_ERROR,
        error: "Sign up error"
      });
    });

    it("should return correct AUTH_ERROR action if check service fails", async () => {
      check.mockImplementation(() =>
        Promise.reject({ message: "Check user error" })
      );

      await actionCreators.signUp(signUpParams)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.AUTH_ERROR,
        error: "Check user error"
      });
    });
  });

  describe("fetchUserAndTheme action creator", () => {
    let dispatch;
    let check;
    let getTheme;

    beforeEach(() => {
      dispatch = jest.fn();
      check = jest
        .spyOn(AuthService, "check")
        .mockImplementation(() => Promise.resolve({ uid: 10 }));
      getTheme = jest
        .spyOn(ThemeService, "getTheme")
        .mockImplementation(() => Promise.resolve("light"));
    });

    it("should return correct start action", () => {
      actionCreators.fetchUserAndTheme()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.FETCH_USER_AND_THEME_START
      });
    });

    it("should return FETCH_USER_AND_THEME_SUCCESS success", async () => {
      await actionCreators.fetchUserAndTheme()(dispatch);

      expect(check).toHaveBeenCalled();
      expect(getTheme).toHaveBeenCalledWith(10);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.FETCH_USER_AND_THEME_SUCCESS,
        user: { uid: 10 },
        themeType: "light"
      });
    });

    it("should return correct FETCH_USER_AND_THEME_FAIL action if check service fails", async () => {
      check.mockImplementation(() => Promise.reject());

      await actionCreators.fetchUserAndTheme()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.FETCH_USER_AND_THEME_FAIL
      });
    });

    it("should return correct FETCH_USER_AND_THEME_FAIL action if getTheme service fails", async () => {
      getTheme.mockImplementation(() => Promise.reject());

      await actionCreators.fetchUserAndTheme()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.FETCH_USER_AND_THEME_FAIL
      });
    });
  });

  describe("authError action creator", () => {
    it("should return correct authError action", () => {
      const message = "Error message";
      const expected = {
        type: actionTypes.AUTH_ERROR,
        error: message
      };
      expect(actionCreators.authError(message)).toEqual(expected);
    });
  });

  describe("clearAuthError action creator", () => {
    it("should return correct clearAuthError action", () => {
      const expected = {
        type: actionTypes.CLEAR_AUTH_ERROR
      };
      expect(actionCreators.clearAuthError()).toEqual(expected);
    });
  });
});
