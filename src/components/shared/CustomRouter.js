import React, { Component } from "react";
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import PropTypes from "prop-types";

export const history = createBrowserHistory();

export default class CustomRouter extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    return <Router history={history} children={this.props.children} />;
  }
}
