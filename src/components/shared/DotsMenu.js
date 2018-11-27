import React, { Component } from "react";

import { IconButton, Menu, MenuItem } from "@material-ui/core";
import LegalDialog from "./LegalDialog";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default class DotsMenu extends Component {
  state = {
    anchorEl: null,
    isOpen: false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClickOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClickClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton aria-haspopup="true" onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={this.handleClose}>
          <LegalDialog
            isOpen={this.state.isOpen}
            onClose={this.handleClickClose}
          />
          <MenuItem onClick={this.handleClickOpen}>Legal info</MenuItem>
          <MenuItem onClick={this.handleClose}>Remove from my songs</MenuItem>
          <MenuItem onClick={this.handleClose}>Share</MenuItem>
        </Menu>
      </div>
    );
  }
}
