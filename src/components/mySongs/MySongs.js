import React, { Component } from "react";
import Title from "../shared/Title";
import TableLayout from "../shared/TableLayout";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadCachedUserSongs } from "../../store/actionCreators/user";

class MySongs extends Component {
  static propTypes = {
    userSongs: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
    loadCachedUserSongs: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadCachedUserSongs(this.props.auth.user.uid);
  }

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
    auth: state.auth,
    userSongs: state.userSongs
  };
}

const mapDispatchToProps = {
  loadCachedUserSongs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MySongs);
