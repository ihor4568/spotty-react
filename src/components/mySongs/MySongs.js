import React, { Component } from "react";
import Title from "../shared/Title";
import TableLayout from "../shared/TableLayout";
import PropTypes from "prop-types";
import { getUserSongs } from "../../store/actionCreators/user";
import { connect } from "react-redux";

class MySongs extends Component {
  static propTypes = {
    userSongs: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
    getUserSongs: PropTypes.func
  };

  componentDidMount() {
    this.props.getUserSongs(this.props.auth.user.uid);
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
    userSongs: state.userSongs,
    auth: state.auth
  };
}

const mapDispatchToProps = {
  getUserSongs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MySongs);
