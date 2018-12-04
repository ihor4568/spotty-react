import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-roboto";

const themeProperties = {
  typography: {
    useNextVariants: true
  },
  palette: {
    type: "light",
    primary: {
      main: "#1e88e5"
    },
    disable: "#cccccc"
  },
  props: {
    drawer: {
      drawerWidth: 200
    },
    mediaPlayer: {
      mediaPlayerHeight: "6.8rem"
    },
    appBar: {
      appBarHeight: "4rem"
    }
  }
};

const theme = createMuiTheme(themeProperties);

export default theme;

export const getThemeWithType = type =>
  createMuiTheme({ ...theme, palette: { ...theme.palette, type } });
