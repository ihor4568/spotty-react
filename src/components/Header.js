import React from "react";

import AppBar from "./AppBar";
import Drawer from "./Drawer";

import CssBaseline from "@material-ui/core/CssBaseline";

export default class Header extends React.Component {
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
    // eslint-disable-next-line
    const { open } = this.state;

    return (
      <div>
        <CssBaseline />
        <AppBar
          open={this.state.open}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          open={this.state.open}
          handleDrawerClose={this.handleDrawerClose}
        />
      </div>
    );
  }
}
