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
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        handler: PropTypes.func
      })
    )
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
          {this.props.items.map((item, index) => (
            <MenuItem
              key={index}
              onClick={item.handler}
              onMouseUp={this.handleClose}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}
