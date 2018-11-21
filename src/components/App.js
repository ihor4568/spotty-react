import React, { Component } from "react";

import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import PlayerComponent from "./PlayerComponent";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    width: "100%"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <HeaderComponent />
        <MainComponent />
        <PlayerComponent />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
