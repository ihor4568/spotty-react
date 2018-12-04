import { THEME_CHANGE_PALETTE_TYPE } from "../actionTypes";

const initialState = {
  type: "dark"
};

export default function changeTheme(state = initialState, action) {
  switch (action.type) {
    case THEME_CHANGE_PALETTE_TYPE:
      return {
        type: action.payload
      };
    default:
      return state;
  }
}

// export default function changeTheme(state = theme, action) {
//   switch (action.type) {
//     case THEME_CHANGE_PALETTE_TYPE:
//       return {
//         ...state,
//         palette: {
//           ...state.palette,
//           type: action.payload,
//         }
//       };
//     default:
//       return state;
//   }
// }

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
