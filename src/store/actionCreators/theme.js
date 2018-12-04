import { THEME_CHANGE_PALETTE_TYPE } from "../actionTypes";
import theme from "../../theme";

export function boundChangeTheme() {
  return dispatch => {
    dispatch(changeTheme(theme));
  };
}

export function changeTheme(payload) {
  return {
    type: THEME_CHANGE_PALETTE_TYPE,
    payload
  };
}
