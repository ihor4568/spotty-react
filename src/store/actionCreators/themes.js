import * as actionTypes from "../actionTypes";
import { ThemeService } from "../../services/ThemeService";
import { AuthService } from "../../services/AuthService";

export function setUserTheme(themeType) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.SET_USER_THEME_START });
      const user = await AuthService.check();
      await ThemeService.setTheme(user.uid, themeType);
      dispatch({
        type: actionTypes.SET_USER_THEME_SUCCESS,
        theme: themeType
      });
    } catch (error) {
      dispatch({ type: actionTypes.SET_USER_THEME_FAIL });
    }
  };
}

export function setDefaultTheme() {
  return {
    type: actionTypes.SET_DEFAULT_THEME
  };
}
