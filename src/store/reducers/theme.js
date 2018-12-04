import { THEME_CHANGE_PALETTE_TYPE } from "../actionTypes";
import theme from "../../theme";

const initialState = theme;

export default function changeTheme(state = initialState, action) {
  switch (action.type) {
    case THEME_CHANGE_PALETTE_TYPE:
      return {
        ...state
      };
    default:
      return state;
  }
}

/*palette: {
  type: `${state.palette.type === 'light' ? state.palette.type = 'dark' : state.palette.type = 'light'}`,
    primary: {
    main: `${state.palette.type === 'dark' ? '#303030' : '#1e88e5'}`
  }
},
props: {
  drawer: {
    drawerWidth: 200
  },
  mediaPlayer: {
    mediaPlayerBackgroundColor: `${state.palette.type === 'dark' ? '#303030' : '#fefefe'}`,
      mediaPlayerPlayBtnBackground: `${state.palette.type === 'dark' ? '#fefefe' : '#1e88e5'}`
  },
  appBar: {
    appBarHeight: "4rem"
  }
}*/

/*...state,
  theme: {
  palette: {
    type: `${state.palette.type === 'light' ? state.palette.type = 'dark' : state.palette.type = 'light'}`*/
