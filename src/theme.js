import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-roboto";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#1e88e5"
    }
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
});

export default theme;
