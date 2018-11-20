import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import { withStyles } from "@material-ui/core/styles";

import PrimarySearchAppBar from "./TestPrimarySearchAppBar";
import Main from "./Main";
import Player from "./Player";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <div>
          <PrimarySearchAppBar />
          <Main />
          <Player />
        </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(null, { withTheme: true })(App);
