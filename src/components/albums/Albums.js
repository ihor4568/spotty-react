import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

import Title from "../shared/Title";
import { connect } from "react-redux";
import { loadCachedAlbums } from "../../store/actionCreators/albums";
import Loader from "../shared/Loader";

const styles = {
  albumDescription: {
    padding: `0.5rem 1rem 0.7rem`
  },
  albumInfo: {
    width: `190px`,
    overflow: `hidden`,
    whiteSpace: `nowrap`,
    textOverflow: `ellipsis`
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      color: `inherit`
    },
    "&:active": {
      color: `inherit`,
      boxShadow: `none`
    }
  },
  imageWrapper: {
    position: "relative",
    paddingTop: "100%"
  },
  media: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "auto"
  }
};

class Albums extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    albums: PropTypes.array.isRequired,
    loadCachedAlbums: PropTypes.func,
    match: PropTypes.object,
    loader: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.loadCachedAlbums();
  }

  render() {
    const { classes, match, loader } = this.props;

    if (loader) {
      return <Loader />;
    }

    return (
      <>
        <Title name="Albums" />
        <Grid container spacing={32} className={classes.container}>
          {this.props.albums.map((album, i) => (
            <Grid key={i} item xl={2} md={3}>
              <Card>
                <Link to={`${match.url}/${album.id}`} className={classes.link}>
                  <CardActionArea>
                    <div className={classes.imageWrapper}>
                      <CardMedia
                        className={classes.media}
                        component="img"
                        image={album.albumCoverURL}
                        title={album.albumName}
                      />
                    </div>
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
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

const mapStateToProps = ({ albums, search, loader }) => ({
  albums: albums.filter(album => {
    const albumName = album.albumName.toLowerCase();

    return albumName.indexOf(search.toLowerCase()) !== -1;
  }),

  loader
});

const mapDispatchToProps = {
  loadCachedAlbums
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Albums));
