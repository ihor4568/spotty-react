import { THEME_CHANGE_PALETTE_TYPE } from "../actionTypes";

export function boundChangeTheme(type) {
  return dispatch => {
    dispatch(changeTheme(type));
  };
}

export function changeTheme(payload) {
  return {
    type: THEME_CHANGE_PALETTE_TYPE,
    payload
  };
}
