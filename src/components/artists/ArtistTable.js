import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card, CardMedia, Typography } from "@material-ui/core";

import { loadArtistsSongs } from "../../store/actionCreators/songs";
import { loadCachedArtists } from "../../store/actionCreators/artists";
import TableLayout from "../shared/TableLayout";
import Loader from "../shared/Loader";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    display: `flex`,
    alignItems: `center`
  },
  artistCard: {
    boxShadow: `none`,
    backgroundColor: `inherit`
  },
  artistImage: {
    width: 220,
    boxSizing: `border-box`,
    borderRadius: `50%`,
    boxShadow: `0 0 4.2rem -0.375rem rgba(0, 0, 0, 0.12)`
  },
  artistName: {
    padding: `1rem`,
    display: `inline-block`,
    overflow: `hidden`,
    whiteSpace: `nowrap`,
    textOverflow: `ellipsis`
  }
};

class ArtistTable extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    artists: PropTypes.array.isRequired,
    songs: PropTypes.array,
    classes: PropTypes.object.isRequired,
    loadArtistsSongs: PropTypes.func,
    loadCachedArtists: PropTypes.func,
    loader: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.loadArtistsSongs(this.props.match.params.id);
    this.props.loadCachedArtists();
  }

  render() {
    const { classes, match, loader } = this.props;

    if (loader) {
      return <Loader />;
    }

    return (
      <>
        {this.props.artists.map(
          (artist, i) =>
            artist.id === match.params.id && (
              <div key={i}>
                <div className={classes.container}>
                  <Card className={classes.artistCard}>
                    <CardMedia
                      component="img"
                      className={classes.artistImage}
                      image={artist.artistPhotoURL}
                      title={artist.artistName}
                    />
                  </Card>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.artistName}
                  >
                    {artist.artistName}
                  </Typography>
                </div>
                <TableLayout songs={this.props.songs} />
              </div>
            )
        )}
      </>
    );
  }
}

const mapStateToProps = ({ artists, songs, loader }) => ({
  artists,
  songs,
  loader
});

const mapDispatchToProps = {
  loadArtistsSongs,
  loadCachedArtists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ArtistTable));
