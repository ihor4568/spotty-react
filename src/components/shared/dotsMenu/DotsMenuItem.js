import React, { Component } from "react";
import { MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";

export default class DotsMenuItem extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };

  render() {
    return (
      <MenuItem onClick={this.props.onClick}>{this.props.children}</MenuItem>
    );
  }
}
