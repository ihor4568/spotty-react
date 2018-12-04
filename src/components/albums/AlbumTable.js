import React, { Component } from "react";
import PropTypes from "prop-types";
import TableLayout from "../shared/TableLayout";
import { loadAlbumSongs } from "../../store/actionCreators/songs";
// import { loadSongs } from "../store/actionCreators/TableLayout";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";

const styles = {};

class AlbumTable extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    albums: PropTypes.array.isRequired,
    songs: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
    loadAlbumSongs: PropTypes.isRequired
  };

  componentDidMount() {
    this.props.loadAlbumSongs(this.props.match.params.id);
  }

  render() {
    const { classes, match } = this.props;
    return (
      <>
        {this.props.albums.map(
          (artist, i) =>
            artist.id === match.params.id && (
              <div key={i}>
                <div className={classes.container}>
                  <Card className={classes.artistCard} key={i}>
                    <CardActionArea className={classes.artistAction}>
                      <CardMedia
                        component="img"
                        className={classes.artistImage}
                        image={artist.artistPhotoURL}
                        title={artist.artistName}
                      />
                    </CardActionArea>
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

function mapStateToProps(state) {
  return {
    albums: state.albums,
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
