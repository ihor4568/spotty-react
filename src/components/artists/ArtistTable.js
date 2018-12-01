import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  Grid,
  CardActionArea,
  CardMedia,
  Typography
} from "@material-ui/core";

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
  artistAction: {
    borderRadius: `50%`,
    overflow: `hidden`,
    padding: `0.5rem`
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

function ArtistTable({ classes, match, artists }) {
  return (
    <>
      {artists.map((artist, i) =>
        match.params.id === artist.id ? (
          <Grid container spacing={32} className={classes.container}>
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
          </Grid>
        ) : null
      )}
    </>
  );
}

ArtistTable.propTypes = {
  match: PropTypes.object.isRequired,
  artists: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    artists: state.artists
  };
}

export default connect(mapStateToProps)(withStyles(styles)(ArtistTable));
