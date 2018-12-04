import React, { Component } from "react";
import PropTypes from "prop-types";
import TableLayout from "../shared/TableLayout";
import { loadAlbumSongs } from "../../store/actionCreators/songs";
// import { loadSongs } from "../store/actionCreators/TableLayout";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = {};

class AlbumTable extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    // artists: PropTypes.array.isRequired,
    songs: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
    loadAlbumSongs: PropTypes.isRequired
  };

  componentDidMount() {
    this.props.loadAlbumSongs(this.props.match.params.id);
  }

  render() {
    // const { classes, match, songs } = this.props;
    return (
      <>
        {/* <AlbumCover albumId={match.params.id} /> */}
        {/* <TableLayout songs={songs} /> */}
        <TableLayout />
        {/* <TableLayout albumId={match.params.id} /> */}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    album: state.album,
    songs: state.songs
  };
}

const mapDispatchToProps = {
  loadAlbumSongs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AlbumTable));
