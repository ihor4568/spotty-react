import React, { Component } from "react";
import styled from "styled-components/macro";

import Grid from "@material-ui/core/Grid";
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

const ArtistsContainer = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - ${props => props.spacing}px);
  margin: 0 auto;
`;

const ArtistContainer = styled(Grid)``;

const ArtistCard = styled(Card)`
  box-shadow: none;
`;

const ArtistActionArea = styled(CardActionArea)`
  border-radius: 50%;
  overflow: hidden;
  padding: 0.5rem;
`;

const ArtistMedia = styled(CardMedia)`
  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: 0 0 4.2rem -0.375rem rgba(0, 0, 0, 0.12);
`;

const ArtistName = styled(Typography)`
  margin: 1rem 0 0 50%;
  transform: translateX(-50%);
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default class Artists extends Component {
  render() {
    return (
      <ArtistsContainer container spacing={32}>
        {ARTISTS_INFO.map((artist, i) => (
          <ArtistContainer key={i} item xl={2} md={3}>
            <ArtistCard>
              <ArtistActionArea>
                <ArtistMedia
                  component="img"
                  image={artist.imageUrl}
                  title={artist.artistName}
                />
              </ArtistActionArea>
              <ArtistName variant="h6" component="h2">
                {artist.artistName}
              </ArtistName>
            </ArtistCard>
          </ArtistContainer>
        ))}
      </ArtistsContainer>
    );
  }
}
