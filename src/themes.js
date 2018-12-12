import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-roboto";

export const lightTheme = createMuiTheme({
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
      mediaPlayerHeight: "6.8rem",
      mediaPlayerBackgroundColor: "#fefefe",
      mediaPlayerPlayButtonBackground: "#1e88e5"
    },
    appBar: {
      appBarHeight: "4rem",
      appBarBackgroundColor: "#1e88e5"
    },
    cardMedia: {
      albumCardHeight: "20rem",
      artistCardHeight: "19.375rem",
      aboutCardHeight: "15.375rem"
    }
  }
});

export const darkTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    type: "dark",
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
      mediaPlayerHeight: "6.8rem",
      mediaPlayerBackgroundColor: "#424242",
      mediaPlayerPlayButtonBackground: "#838383"
    },
    appBar: {
      appBarHeight: "4rem",
      appBarBackgroundColor: "#424242"
    },
    cardMedia: {
      albumCardHeight: "20rem",
      artistCardHeight: "19.375rem",
      aboutCardHeight: "15.375rem"
    }
  }
});
