import React from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";

import Header from "./Header";
import Main from "./Main";
import Player from "./Player";

import theme from "../theme";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    width: "100%"
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header />
          <Main />
          <Player />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
