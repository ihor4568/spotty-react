import React, { Component } from "react";

import AppBar from "./AppBar";
import Drawer from "./Drawer";

import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    onAboutClick: PropTypes.func.isRequired,
    onAlbumsClick: PropTypes.func.isRequired
  };

  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <CssBaseline />
        <AppBar open={this.state.open} onDrawerOpen={this.handleDrawerOpen} />
        <Drawer
          open={this.state.open}
          onDrawerClose={this.handleDrawerClose}
          onAboutClick={this.props.onAboutClick}
          onAlbumsClick={this.props.onAlbumsClick}
        />
      </div>
    );
  }
}
