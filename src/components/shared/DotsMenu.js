import React, { Component } from "react";
import PropTypes from "prop-types";

import { IconButton, Menu, MenuItem } from "@material-ui/core";
import LegalDialog from "./LegalDialog";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default class DotsMenu extends Component {
  state = {
    anchorEl: null,
    isOpen: false
  };

  static propTypes = {
    id: PropTypes.string.isRequired
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleShare = () => {
    if (this.props.id) {
      window.open(`/songs/${this.props.id}`);
    }
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
          <MenuItem onClick={this.handleShare}>Share</MenuItem>
        </Menu>
      </div>
    );
  }
}
