import { THEME_CHANGE_PALETTE_TYPE } from "../actionTypes";

export function changeThemeType(payload) {
  return {
    type: THEME_CHANGE_PALETTE_TYPE,
    payload
  };
}
