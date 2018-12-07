import React, { Component } from "react";
import PropTypes from "prop-types";
import TableLayout from "../shared/TableLayout";
import { loadSongs } from "../../store/actionCreators/songs";
import { loadCachedAlbums } from "../../store/actionCreators/albums";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Typography } from "@material-ui/core";

const styles = {
  container: {
    display: `flex`,
    margin: `1rem 0 2.5rem`
  },
  albumAuthors: {
    paddingLeft: `1.2rem`,
    fontSize: `1.2rem`
  },
  albumImage: {
    width: 350,
    boxSizing: `border-box`
  },
  albumName: {
    paddingLeft: `1rem`,
    display: `inline-block`,
    overflow: `hidden`,
    whiteSpace: `nowrap`,
    textOverflow: `ellipsis`
  }
};

class AlbumTable extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    albums: PropTypes.array.isRequired,
    songs: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
    loadSongs: PropTypes.func,
    loadCachedAlbums: PropTypes.func
  };

  componentDidMount() {
    this.props.loadSongs(this.props.match.params.id);
    this.props.loadCachedAlbums();
  }

  render() {
    const { classes, match } = this.props;
    return (
      <>
        {this.props.albums.map(
          (album, i) =>
            album.id === match.params.id && (
              <div key={i}>
                <div className={classes.container}>
                  <Card className={classes.albumCard}>
                    <CardMedia
                      className={classes.albumImage}
                      component="img"
                      image={album.albumCoverURL}
                      title={album.albumName}
                    />
                  </Card>
                  <div>
                    <Typography
                      className={classes.albumName}
                      component="h2"
                      variant="h4"
                    >
                      {album.albumName}
                    </Typography>
                    <Typography
                      className={classes.albumAuthors}
                      component="p"
                      variant="body1"
                    >
                      {`by `}
                      {album.artistsNames.join(", ")}
                    </Typography>
                  </div>
                </div>
                <TableLayout songs={this.props.songs} />
              </div>
            )
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums,
    songs: state.songs
  };
}

const mapDispatchToProps = {
  loadSongs,
  loadCachedAlbums
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AlbumTable));
