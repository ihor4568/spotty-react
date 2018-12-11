import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Title from "../shared/Title";
import { loadCachedArtists } from "../../store/actionCreators/artists";

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography
} from "@material-ui/core";

import { connect } from "react-redux";
import Loader from "../shared/Loader";

const styles = {
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
    boxSizing: `border-box`,
    borderRadius: `50%`,
    boxShadow: `0 0 4.2rem -0.375rem rgba(0, 0, 0, 0.12)`
  },
  artistName: {
    margin: `1rem 0 0 50%`,
    transform: `translateX(-50%)`,
    display: `inline-block`,
    cursor: `pointer`,
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
  }
};
class Artists extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    artists: PropTypes.array.isRequired,
    loadCachedArtists: PropTypes.func,
    loader: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.loadCachedArtists();
  }

  render() {
    const { classes, match, loader } = this.props;
    if (loader) {
      return <Loader />;
    }

    return (
      <>
        <Title name="Artists" />
        <Grid container spacing={32} className={classes.container}>
          {this.props.artists.map((artist, i) => (
            <Grid key={i} item xl={2} md={3}>
              <Card className={classes.artistCard}>
                <Link to={`${match.url}/${artist.id}`} className={classes.link}>
                  <CardActionArea className={classes.artistAction}>
                    <CardMedia
                      component="img"
                      className={classes.artistImage}
                      image={artist.artistPhotoURL}
                      title={artist.artistName}
                    />
                  </CardActionArea>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.artistName}
                  >
                    {artist.artistName}
                  </Typography>
                </Link>
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
    artists: state.artists,
    loader: state.loader
  };
}

const mapDispatchToProps = {
  loadCachedArtists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Artists));
