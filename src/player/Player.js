import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import PlayIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Previous from "@material-ui/icons/SkipPrevious";
import Next from "@material-ui/icons/SkipNext";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Star from "@material-ui/icons/StarBorder";
import Slider from "@material-ui/lab/Slider";
import ThreeDot from '@material-ui/icons/MoreVert';

const MedialPlayerAligner = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 0;
  width: 100%;
  transition: all 0.6s ease-in-out;
`;

const MediaPlayer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #fefefe;
  height: 6.8rem;
`;

const AudioInfoContainer = styled.div`
  flex-basis: 33%;
`;

const AudioInfo = styled.div`
  display: flex;
`;

const AudioInfoImage = styled.div``;

const Image = styled.img`
  width: 6.25rem;
  height: 6.25rem;
`;

const AudioInfoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 1.56rem;
`;

const SongInfo = styled.span`
  font-weight: bold;
`;

const AlbumArtistInfo = styled.span`
  font-weight: semi-bold;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const VolumeControls = styled.div`
  display: flex;
  align-items: center;
`;

const VolumeBar = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

const VolumeSlider = styled.div`
  width: 6rem;
  margin-left: 0.625rem;
`;

const AudioRating = styled.div``;

const ThreeDotsMenu = styled.div``;

const PrevNextButtonStyle = {
    margin: 0,
    padding: 0,
    color: 'white',
    background: '#838383',
};

const PlayButtonContainer = {
    width: '4.5rem',
    height: '4.5rem',
    marginRight: 20,
    marginLeft: 20
};

const PlayButtonStateIcon = {
    fontSize: 45
};

const Player = ({
  onPlay,
  isPlaying,
  onChangeProgress,
  progress,
  imageURL,
  songName,
  album,
  author,
  volume,
  onChangeVolume
}) => (
  <MedialPlayerAligner>
    <MediaPlayer>
      <Slider value={progress} onChange={onChangeProgress} />
      <AudioInfoContainer>
        <AudioInfo>
          <AudioInfoImage>
            <Image src={imageURL} />
          </AudioInfoImage>
          <AudioInfoText>
            <SongInfo>{songName}</SongInfo>
            <AlbumArtistInfo>
              {album} - {author}
            </AlbumArtistInfo>
          </AudioInfoText>
        </AudioInfo>
      </AudioInfoContainer>
      <ControlsContainer>
        <Controls>
          <Button style={PrevNextButtonStyle} variant="contained">{<Previous fontSize={"large"} />}</Button>
          <Button
              style={PlayButtonContainer}
            onClick={onPlay}
            variant="fab"
            color="primary"
            aria-label="Play"
          >
            {isPlaying && <PauseIcon style={PlayButtonStateIcon}/>}
            {!isPlaying && <PlayIcon style={PlayButtonStateIcon}/>}
          </Button>
          <Button style={PrevNextButtonStyle} variant="contained">{<Next fontSize={"large"} />}</Button>
        </Controls>
        <VolumeControls>
          <VolumeBar>
            <VolumeUp />
          </VolumeBar>
          <VolumeSlider>
            <Slider value={volume} onChange={onChangeVolume} />
          </VolumeSlider>
        </VolumeControls>
      </ControlsContainer>
        <AudioRating>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </AudioRating>
        <ThreeDotsMenu>
            <ThreeDot/>
        </ThreeDotsMenu>
    </MediaPlayer>
  </MedialPlayerAligner>
);

export default Player;
