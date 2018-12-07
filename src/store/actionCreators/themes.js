import { THEME_CHANGE_PALETTE_TYPE } from "../actionTypes";

export function onChangeTheme(payload) {
  return {
    type: THEME_CHANGE_PALETTE_TYPE,
    payload
  };
}
