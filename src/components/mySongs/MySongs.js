import React, { Component } from "react";

import Title from "../shared/Title";
import TableLayout from "../shared/TableLayout";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadCachedUserSongs } from "../../store/actionCreators/user";
import Loader from "../shared/Loader";

class MySongs extends Component {
  static propTypes = {
    userSongs: PropTypes.array,
    songs: PropTypes.array,
    auth: PropTypes.object,
    loadCachedUserSongs: PropTypes.func.isRequired,
    loadSongs: PropTypes.func,
    loader: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.loadCachedUserSongs(this.props.auth.user.uid);
  }

  render() {
    const { loader } = this.props;

    if (loader) {
      return <Loader />;
    }

    return (
      <>
        <Title name="My Songs" />
        <TableLayout songs={this.props.songs} />
      </>
    );
  }
}

const mapStateToProps = ({ auth, userSongs, loader }) => ({
  auth,
  songs: userSongs,
  loader
});

const mapDispatchToProps = {
  loadCachedUserSongs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MySongs);
