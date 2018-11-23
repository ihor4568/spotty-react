import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "./shared/Header";
import Main from "./shared/Main";
import PlayerContainer from "./player/PlayerContainer";

import theme from "../theme";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    display: "flex",
    width: "100%"
  }
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    itemMount: "Albums"
  };

  handleAboutClick = () => {
    this.setState({ itemMount: "About" });
  };

  handleAlbumsClick = () => {
    this.setState({ itemMount: "Albums" });
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header
            onAboutClick={this.handleAboutClick}
            onAlbumsClick={this.handleAlbumsClick}
          />
          <Main itemMount={this.state.itemMount} />
          <PlayerContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
