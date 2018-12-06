import React, { Component } from "react";
import Title from "../shared/Title";
import TableLayout from "../shared/TableLayout";
import PropTypes from "prop-types";
import { loadSongs } from "../../store/actionCreators/songs";
import { connect } from "react-redux";

class MySongs extends Component {
  static propTypes = {
    loadSongs: PropTypes.isRequired,
    songs: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.loadSongs("album1");
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

function mapStateToProps(state) {
  return {
    songs: state.songs
  };
}

const mapDispatchToProps = {
  loadSongs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MySongs);
