import React, { Component } from "react";

import Player from "./Player";

const song = {
  source:
    "https://firebasestorage.googleapis.com/v0/b/spotty-be0c7.appspot.com/o/Album1%2FAdam__Alma_-_04_-_Back_To_The_Sea.mp3?alt=media&token=f0f1439f-f09e-40d9-938d-c7f1a332a574",
  title:
    "https://firebasestorage.googleapis.com/v0/b/spotty-be0c7.appspot.com/o/Album1%2FBack_To_The_Sea.jpg?alt=media&token=a83f646a-9d63-4eaa-bcdf-e17cf6967126",
  songName: "Smile for me, sun",
  albumName: "Back to the sea",
  authorName: "Adam Alma"
};

class PlayerContainer extends Component {
  state = {
    isPlaying: false,
    playingProgress: 0,
    volumeValue: 30
  };

  componentDidMount = () => {
    this.audio.addEventListener("play", this.handlePlay);
    this.audio.addEventListener("timeupdate", this.handlePlay);
    this.audio.addEventListener("onvolumechange", this.handleChangeVolume);
  };

  componentWillUnmount = () => {
    this.audio.removeEventListener("play", this.handlePlay);
    this.audio.removeEventListener("timeupdate", this.handlePlay);
  };

  handleChangePlayingState = () => {
    this.setState(
      prevState => ({ isPlaying: !prevState.isPlaying }),
      this.setPlayingState
    );
  };

  handleChangeProgress = (event, value) => {
    this.setState({ playingProgress: value });
  };

  handleChangeVolume = (event, value) => {
    const vol = value.toFixed(0);
    this.setState({ volumeValue: Number(vol) });
  };

  setPlayingState = () => {
    const { isPlaying } = this.state;

    if (!isPlaying) {
      this.audio.pause();
      return;
    }
    this.audio.play();
  };

  handlePlay = ({ target }) => {
    const { currentTime, duration } = target;
    const currentProgress = ((currentTime / duration) * 100).toFixed(2);

    this.setState({ playingProgress: Number(currentProgress) });
  };

  render() {
    const { playingProgress, isPlaying, volumeValue } = this.state;
    const { source, title, songName, albumName, authorName } = song;

    return (
      <>
        <audio src={source} ref={element => (this.audio = element)} />
        <Player
          onPlay={this.handleChangePlayingState}
          isPlaying={isPlaying}
          onChangeProgress={this.handleChangeProgress}
          progress={playingProgress}
          imageURL={title}
          songName={songName}
          album={albumName}
          author={authorName}
          volume={volumeValue}
          onChangeVolume={this.handleChangeVolume}
        />
      </>
    );
  }
}

export default PlayerContainer;
