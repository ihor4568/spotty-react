import { USER_FETCHED, USER_NOT_FOUND, SIGN_OUT } from "../actionTypes";

import { AuthService } from "../../services/AuthService";

export function signIn({ email, password }) {
  return async dispatch => {
    const userInfo = await AuthService.signIn(email, password);
    dispatch({ type: USER_FETCHED, user: userInfo.user });
  };
}

export function signUp({ email, password, name }) {
  return async dispatch => {
    await AuthService.signUp(email, password, name);
    const user = await AuthService.check();

    dispatch({ type: USER_FETCHED, user });
  };
}

export function signOut() {
  return async dispatch => {
    await AuthService.signOut();
    dispatch({ type: SIGN_OUT });
  };
}

export function fetchUser() {
  return async dispatch => {
    try {
      const user = await AuthService.check();
      dispatch({ type: USER_FETCHED, user });
    } catch (e) {
      dispatch({ type: USER_NOT_FOUND });
    }
  };
}
