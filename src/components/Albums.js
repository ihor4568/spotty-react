import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const ALBUMS_INFO = [
  {
    imageUrl:
      "http://1.bp.blogspot.com/-gJPfokcNytE/Uy0KljKYg8I/AAAAAAAAAKk/8UhzMrqWjbg/s1600/397803_10151392708761987_1614138446_n.jpg",
    albumName: "The Eminem Show",
    albumArtists: "Eminem"
  },
  {
    imageUrl:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2Fht%2F2013%2F11%2Fwhosampled-eminem-the-marshall-mathers-lp-2-album-samples.jpg?q=75&w=800&cbr=1&fit=max",
    albumName: "The Marshall Mathers lp 2",
    albumArtists: "Eminem"
  },
  {
    imageUrl:
      "https://polishedblogger.files.wordpress.com/2016/02/sia___this_is_acting__cover_album__2015_by_jeanbox77-d9ahnd6.jpg?w=768",
    albumName: "This is Acting",
    albumArtists: "Sia"
  },
  {
    imageUrl:
      "https://s-media-cache-ak0.pinimg.com/originals/61/11/5d/61115deef723a87e4a264e6b1f25b3f9.jpg",
    albumName: "21",
    albumArtists: "Adele"
  },
  {
    imageUrl:
      "https://daz19uf2q56ul.cloudfront.net/20171103032838/Jeremy-Riddle-More-cover.jpg",
    albumName: "MORE",
    albumArtists: "Jeremy Riddle"
  },
  {
    imageUrl:
      "https://daz19uf2q56ul.cloudfront.net/20170815132211/Come-Alive-Final-Cover-Art1.jpg",
    albumName: "Come Alive",
    albumArtists: "Bethel Music Kids"
  }
];

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
  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography variant="h4" component="h2">
          Albums
        </Typography>
        <Grid container spacing={32} className={classes.container}>
          {ALBUMS_INFO.map((album, i) => (
            <Grid key={i} item xl={2} md={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={album.imageUrl}
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
                      by {album.albumArtists}
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

Albums.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Albums);
