import React, { Component } from "react";
import PropTypes from "prop-types";

import { IconButton, Menu } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default class DotsMenu extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };

  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleItemClick = handler => {
    this.handleClose();
    handler();
  };

  render() {
    const { anchorEl } = this.state;

    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onClick: this.handleItemClick.bind(this, child.props.onClick)
      });
    });

    return (
      <div>
        <IconButton aria-haspopup="true" onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={this.handleClose}>
          {children}
        </Menu>
      </div>
    );
  }
}
