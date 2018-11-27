import React, { Component } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default class DotsMenu extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton aria-haspopup="true" onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={this.handleClose}>
          <MenuItem onClick={this.handleClose}>Legal info</MenuItem>
          <MenuItem onClick={this.handleClose}>Remove from my songs</MenuItem>
          <MenuItem onClick={this.handleClose}>Share</MenuItem>
        </Menu>
      </div>
    );
  }
}
