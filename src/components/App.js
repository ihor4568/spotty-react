import React, { Component } from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";

import Header from "./shared/Header";
import Main from "./shared/Main";
import PlayerContainer from "./player/PlayerContainer";

import theme from "../theme";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { loadAlbums } from "../store/actionCreators/albums";

const styles = theme => ({
  root: {
    display: "flex",
    width: "100%"
  }
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loadAlbums: PropTypes.func
  };

  componentDidMount() {
    this.props.loadAlbums();
  }

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header />
          <Main />
          <PlayerContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = {
  loadAlbums
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(App));
