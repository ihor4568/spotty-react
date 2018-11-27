import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";

const styles = {
  container: {
    width: `100%`,
    margin: 0
  },
  albumDescription: {
    padding: `0.5rem 1rem 0.7rem`
  },
  albumInfo: {
    overflow: `hidden`,
    whiteSpace: `nowrap`,
    textOverflow: `ellipsis`
  }
};

class Albums extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    albums: PropTypes.array.isRequired
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography variant="h4" component="h2">
          Albums
        </Typography>
        <Grid container spacing={32} className={classes.container}>
          {this.props.albums.map((album, i) => (
            <Grid key={i} item xl={2} md={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={album.albumCoverURL}
                    title={album.albumName}
                  />
                  <CardContent className={classes.albumDescription}>
                    <Typography
                      variant="h6"
                      component="h2"
                      className={classes.albumInfo}
                    >
                      {album.albumName}
                    </Typography>
                    <Typography component="p" className={classes.albumInfo}>
                      by {album.artistsNames.join(", ")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Albums));
