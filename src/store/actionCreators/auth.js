import * as actionTypes from "../actionTypes";

import { AuthService } from "../../services/AuthService";
import { ThemeService } from "../../services/ThemeService";

export function signIn({ email, password }) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.SIGN_IN_START });
      const userInfo = await AuthService.signIn(email, password);
      const themeType = await ThemeService.getTheme(userInfo.user.uid);
      dispatch({
        type: actionTypes.SIGN_IN_SUCCESS,
        user: userInfo.user,
        themeType
      });
    } catch (e) {
      dispatch(authError(e.message));
    }
  };
}

export function signUp({ email, password, name, avatarURL }) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.SIGN_UP_START });
      await AuthService.signUp(email, password, name, avatarURL);
      const user = await AuthService.check();
      dispatch({
        type: actionTypes.SIGN_UP_SUCCESS,
        user
      });
    } catch (e) {
      dispatch(authError(e.message));
    }
  };
}

export function signOut() {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.SIGN_OUT_START });
      await AuthService.signOut();
      dispatch({ type: actionTypes.SIGN_OUT_SUCCESS });
    } catch (e) {
      dispatch({ type: actionTypes.SIGN_OUT_FAIL });
    }
  };
}

export function fetchUserAndTheme() {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.FETCH_USER_AND_THEME_START });
      const user = await AuthService.check();
      const themeType = await ThemeService.getTheme(user.uid);
      dispatch({
        type: actionTypes.FETCH_USER_AND_THEME_SUCCESS,
        user,
        themeType
      });
    } catch (e) {
      dispatch({ type: actionTypes.FETCH_USER_AND_THEME_FAIL });
    }
  };
}

export function authError(message) {
  return {
    type: actionTypes.AUTH_ERROR,
    error: message
  };
}

export function clearAuthError() {
  return {
    type: actionTypes.CLEAR_AUTH_ERROR
  };
}
