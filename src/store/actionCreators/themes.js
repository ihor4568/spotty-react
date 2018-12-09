import * as actionTypes from "../actionTypes";
import { ThemeService } from "../../services/ThemeService";

const getUserId = getState => {
  const {
    auth: { user }
  } = getState();

  return user ? user.uid : null;
};

export function setUserTheme(themeType) {
  return async (dispatch, getState) => {
    try {
      const userId = getUserId(getState);
      dispatch({ type: actionTypes.SET_USER_THEME_START });
      await ThemeService.setTheme(userId, themeType);
      dispatch({
        type: actionTypes.SET_USER_THEME_SUCCESS,
        payload: themeType
      });
    } catch (error) {
      dispatch({ type: actionTypes.SET_USER_THEME_FAIL });
    }
  };
}

export function fetchUserTheme() {
  return async (dispatch, getState) => {
    try {
      const userId = getUserId(getState);
      dispatch({ type: actionTypes.FETCH_USER_THEME_START });
      const themeType = await ThemeService.getTheme(userId);
      dispatch({
        type: actionTypes.FETCH_USER_THEME_SUCCESS,
        payload: themeType
      });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_USER_THEME_FAIL, error });
    }
  };
}

export function setDefaultTheme() {
  return {
    type: actionTypes.SET_DEFAULT_THEME
  };
}
