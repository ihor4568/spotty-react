import { createMuiTheme } from "@material-ui/core/styles";

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
      drawerWidth: 200,
      isShared: "true"
    }
  }
});

export default theme;
