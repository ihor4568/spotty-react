import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "./shared/Header";
import Main from "./shared/Main";
import Player from "./shared/Player";
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
    itemMount: ""
  };

  handleAboutClick = () => {
    this.setState({ itemMount: "About" });
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header onAboutClick={this.handleAboutClick} />
          <Main itemMount={this.state.itemMount} />
          <Player />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
