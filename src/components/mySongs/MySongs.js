import React, { Component } from "react";

import Title from "../shared/Title";
import TableLayout from "../shared/TableLayout";

import PropTypes from "prop-types";
import { loadSongs } from "../../store/actionCreators/songs";
import { connect } from "react-redux";

class MySongs extends Component {
  static propTypes = {
    loadSongs: PropTypes.func
  };

  componentDidMount() {
    this.props.loadSongs("album1");
  }

  render() {
    return (
      <>
        <Title name="My Songs" />
        <TableLayout />
      </>
    );
  }
}

const mapDispatchToProps = {
  loadSongs
};

export default connect(
  null,
  mapDispatchToProps
)(MySongs);
