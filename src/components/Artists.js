import React, { Component } from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const ARTISTS_INFO = [
  {
    imageUrl:
      "https://consequenceofsound.files.wordpress.com/2010/10/2010_10oct_24_jayzhiphopadvice.jpg?quality=80",
    artistName: "Jay Z"
  },
  {
    imageUrl: "https://lyricsforme.com/upload/image/artist/adele-profile.jpg",
    artistName: "Adele"
  },
  {
    imageUrl:
      "http://static1.squarespace.com/static/578f89682994ca6eb42dac86/578f8b86d1758e8ac840fdb2/5b6c7fc68a922d83a728c122/1533839950211/LUDACRIS.jpg?format=1000w",
    artistName: "Ludacris"
  },
  {
    imageUrl:
      "https://images.genius.com/fce1e2b08952b1596484d7ea9ce00db2.1000x1000x1.jpg",
    artistName: "Xzibit"
  },
  {
    imageUrl:
      "https://fanart.tv/fanart/music/1d11e2a1-4531-4d61-a8c7-7b5c6a608fd2/artistthumb/ice-cube-53ffd45ce495f.jpg",
    artistName: "Ice Cube"
  },
  {
    imageUrl:
      "https://www.shropshirestar.com/resizer/hqU1_vsIGbZkvKdwRSzpDYf59Vo=/1000x0/filters:quality(100)/arc-anglerfish-arc2-prod-shropshirestar-mna.s3.amazonaws.com/public/RBFEKBZ3PZDPHM662ZRIJZJNTA.jpg",
    artistName: "Britney Spears"
  }
];

const ArtistsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  .artists__item-container {
    width: calc(100% / 6 - 2rem);
    margin: 1rem;
    box-shadow: none;
  }
  .artists__item {
    border-radius: 50%;
    overflow: hidden;
    padding: 0.5rem;
  }
  .artists__item:hover {
    opacity: 0.9;
  }
  .artist__item-container:active {
    margin-top: 150px;
  }
  .artists__image {
    box-sizing: border-box;
    border-radius: 50%;
    box-shadow: 0 0 4.2rem -0.375rem rgba(0, 0, 0, 0.12);
  }
  .artists__artist-name {
    margin: 1rem 0 0 50%;
    transform: translateX(-50%);
    display: inline-block;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 1440px) {
    .artists__item-container {
      width: calc(100% / 4 - 2rem);
    }
  }
`;

export default class Artists extends Component {
  render() {
    return (
      <ArtistsContainer className="artists">
        {ARTISTS_INFO.map((artist, i) => (
          <Card key={i} className="artists__item-container">
            <CardActionArea className="artists__item">
              <CardMedia
                component="img"
                className="artists__image"
                image={artist.imageUrl}
                title={artist.artistName}
              />
            </CardActionArea>
            <Typography
              variant="h6"
              component="h2"
              className="artists__artist-name"
            >
              {artist.artistName}
            </Typography>
          </Card>
        ))}
      </ArtistsContainer>
    );
  }
}
