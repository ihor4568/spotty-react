import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography
} from "@material-ui/core";

const ARTISTS_INFO = [
  {
    artistId: "artist1",
    imageUrl:
      "https://consequenceofsound.files.wordpress.com/2010/10/2010_10oct_24_jayzhiphopadvice.jpg?quality=80",
    artistName: "Jay Z"
  },
  {
    artistId: "artist2",
    imageUrl: "https://lyricsforme.com/upload/image/artist/adele-profile.jpg",
    artistName: "Adele"
  },
  {
    artistId: "artist3",
    imageUrl:
      "http://static1.squarespace.com/static/578f89682994ca6eb42dac86/578f8b86d1758e8ac840fdb2/5b6c7fc68a922d83a728c122/1533839950211/LUDACRIS.jpg?format=1000w",
    artistName: "Ludacris"
  },
  {
    artistId: "artist4",
    imageUrl:
      "https://images.genius.com/fce1e2b08952b1596484d7ea9ce00db2.1000x1000x1.jpg",
    artistName: "Xzibit"
  },
  {
    artistId: "artist5",
    imageUrl:
      "https://fanart.tv/fanart/music/1d11e2a1-4531-4d61-a8c7-7b5c6a608fd2/artistthumb/ice-cube-53ffd45ce495f.jpg",
    artistName: "Ice Cube"
  },
  {
    artistId: "artist6",
    imageUrl:
      "https://www.shropshirestar.com/resizer/hqU1_vsIGbZkvKdwRSzpDYf59Vo=/1000x0/filters:quality(100)/arc-anglerfish-arc2-prod-shropshirestar-mna.s3.amazonaws.com/public/RBFEKBZ3PZDPHM662ZRIJZJNTA.jpg",
    artistName: "Britney Spears"
  }
];

const styles = {
  container: {
    marginTop: `.5rem`
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
    match: PropTypes.object.isRequired
  };

  render() {
    const { classes, match } = this.props;
    return (
      <>
        <Typography variant="h4" component="h2">
          Artists
        </Typography>
        <Grid container spacing={32} className={classes.container}>
          {ARTISTS_INFO.map((artist, i) => (
            <Grid key={i} item xl={2} md={3}>
              <Card className={classes.artistCard}>
                <Link
                  to={`${match.url}/${artist.artistId}`}
                  className={classes.link}
                >
                  <CardActionArea className={classes.artistAction}>
                    <CardMedia
                      component="img"
                      className={classes.artistImage}
                      image={artist.imageUrl}
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

export default withStyles(styles)(Artists);
