import * as actionTypes from "../../actionTypes";
import { AuthService } from "../../../services/AuthService";
import { ThemeService } from "../../../services/ThemeService";
import { setUserTheme } from "../themes";

jest.mock("../../../services/FirebaseService");

describe("themes action creators tests", () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("setUserTheme tests", () => {
    const mockedThemeType = "dark";

    it("should set user theme successfully", async () => {
      const mockedUser = { uid: "test_uid" };
      const checkUserPromise = Promise.resolve(mockedUser);
      const setThemePromise = Promise.resolve();
      const checkSpy = jest
        .spyOn(AuthService, "check")
        .mockImplementation(() => checkUserPromise);
      const setThemeSpy = jest
        .spyOn(ThemeService, "setTheme")
        .mockImplementation(() => setThemePromise);

      setUserTheme(mockedThemeType)(dispatchMock);
      await checkUserPromise;
      await setThemePromise;

      expect(dispatchMock).toHaveBeenCalledWith({
        type: actionTypes.SET_USER_THEME_START
      });
      expect(checkSpy).toHaveBeenCalled();
      expect(setThemeSpy).toHaveBeenCalledWith(mockedUser.uid, mockedThemeType);
      expect(dispatchMock).toHaveBeenCalledWith({
        type: actionTypes.SET_USER_THEME_SUCCESS,
        themeType: mockedThemeType
      });
    });

    it("should set user theme fail when AuthService check failed", async () => {
      const checkPromise = Promise.reject();
      const setThemePromise = Promise.resolve();
      const checkSpy = jest
        .spyOn(AuthService, "check")
        .mockImplementation(() => checkPromise);
      const setThemeSpy = jest
        .spyOn(ThemeService, "setTheme")
        .mockImplementation(() => setThemePromise);

      await setUserTheme(mockedThemeType)(dispatchMock);

      expect(dispatchMock).toHaveBeenCalledWith({
        type: actionTypes.SET_USER_THEME_START
      });

      expect(checkSpy).toHaveBeenCalled();
      expect(setThemeSpy).not.toHaveBeenCalled();
      expect(dispatchMock).toHaveBeenCalledWith({
        type: actionTypes.SET_USER_THEME_FAIL
      });
    });

    it("should set user theme fail when ThemeService setTheme failed", async () => {
      const mockedUser = { uid: "test_uid" };
      const checkPromise = Promise.resolve(mockedUser);
      const setThemePromise = Promise.reject();
      const checkSpy = jest
        .spyOn(AuthService, "check")
        .mockImplementation(() => checkPromise);
      const setThemeSpy = jest
        .spyOn(ThemeService, "setTheme")
        .mockImplementation(() => setThemePromise);

      await setUserTheme(mockedThemeType)(dispatchMock);

      expect(dispatchMock).toHaveBeenCalledWith({
        type: actionTypes.SET_USER_THEME_START
      });
      expect(checkSpy).toHaveBeenCalled();
      expect(setThemeSpy).toHaveBeenCalled();
      expect(dispatchMock).toHaveBeenCalledWith({
        type: actionTypes.SET_USER_THEME_FAIL
      });
    });
  });
});
