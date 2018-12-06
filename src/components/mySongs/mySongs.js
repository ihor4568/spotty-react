import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import TableLayout from "../shared/TableLayout";
import Title from "../shared/Title";

import {
  getUserSongs,
  setUserSongs,
  removeUserSongs
} from "../../store/actionCreators/user";

class MySongs extends Component {
  static propTypes = {
    userSongs: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
    getUserSongs: PropTypes.func,
    setUserSongs: PropTypes.func,
    removeUserSongs: PropTypes.func
  };

  componentDidMount() {
    this.props.getUserSongs(this.props.auth.user.uid);
  }

  // handleSet = () => {
  //   this.props.setUserSongs(this.props.auth.user.uid, document.getElementById("set").value);
  // }

  // handleRem = () => {
  //   this.props.removeUserSongs(this.props.auth.user.uid, document.getElementById("rem").value);
  // }

  // handleGet = () => {
  //   this.props.getUserSongs(this.props.auth.user.uid);
  // }

  render() {
    return (
      <>
        <Title name="My Songs" />
        <TableLayout songs={this.props.userSongs} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userSongs: state.userSongs,
    auth: state.auth
  };
}

const mapDispatchToProps = {
  getUserSongs,
  setUserSongs,
  removeUserSongs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MySongs);
