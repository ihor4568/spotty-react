import React, { Component } from "react";

import Title from "../shared/Title";
import TableLayout from "../shared/TableLayout";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadCachedUserSongs } from "../../store/actionCreators/userSongs";

class MySongs extends Component {
  static propTypes = {
    userSongs: PropTypes.array,
    songs: PropTypes.array,
    auth: PropTypes.object,
    loadSongs: PropTypes.func,
    loadCachedUserSongs: PropTypes.func
  };

  componentDidMount() {
    this.props.loadCachedUserSongs(this.props.auth.user.uid);
  }

  render() {
    return (
      <>
        <Title name="My Songs" />
        <TableLayout songs={this.props.songs} />
      </>
    );
  }
}

const mapStateToProps = ({ auth, userSongs }) => ({
  auth,
  songs: userSongs
});

const mapDispatchToProps = {
  loadCachedUserSongs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MySongs);
