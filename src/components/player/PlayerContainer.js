import React, { Component } from "react";
import {
  VolumeOff,
  VolumeMute,
  VolumeDown,
  VolumeUp
} from "@material-ui/icons";
import PropTypes from "prop-types";

import Player from "./Player";

import { connect } from "react-redux";
import { pauseSong, playSong } from "../../store/actionCreators/player";
import { addUserSong, removeUserSong } from "../../store/actionCreators/user";

const VOLUME_ICON_SET = {
  VolumeOff: <VolumeOff />,
  VolumeMute: <VolumeMute />,
  VolumeDown: <VolumeDown />,
  VolumeUp: <VolumeUp />
};

export class PlayerContainer extends Component {
  state = {
    songDuration: 0,
    playingProgress: 0,
    volumeValue: 0.5,
    isMuted: false,
    currentSongsList: {}
    // number: null
  };

  static propTypes = {
    userSongs: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
    songs: PropTypes.array.isRequired,
    player: PropTypes.object.isRequired,
    playSong: PropTypes.func.isRequired,
    pauseSong: PropTypes.func.isRequired,
    addUserSong: PropTypes.func.isRequired,
    removeUserSong: PropTypes.func.isRequired
  };

  getItems() {
    // console.log(this.props.player);
    let checkSongId = this.checkSongId(this.props.player.song.id);
    return [
      {
        name: "Legal info",
        handler: () => {}
      },
      {
        name: this.getMenuItemTitle(this.props.player.song.id, checkSongId),
        handler: this.handleOperation.bind(
          this,
          this.props.player.song.id,
          checkSongId
        )
      },
      {
        name: "Share",
        handler: this.handleShare.bind(this, this.props.player.song.id)
      }
    ];
  }

  checkSongId(songId) {
    return this.props.userSongs.some(elem => elem.id === songId);
  }

  getMenuItemTitle = (songId, checkSongId) => {
    if (checkSongId) {
      return "Remove from my songs";
    }
    return "Add to my songs";
  };

  handleOperation = (songId, checkSongId) => {
    if (checkSongId) {
      this.props.removeUserSong(this.props.auth.user.uid, songId);
    } else {
      this.props.addUserSong(this.props.auth.user.uid, songId);
    }
  };

  handleShare = songId => {
    window.open(`/songs/${songId}`);
  };

  componentDidMount() {
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.setPlayingState();
    }
  }

  addListeners = () => {
    this.audio.addEventListener("play", this.handlePlay);
    this.audio.addEventListener("timeupdate", this.handlePlay);
  };

  removeListeners = () => {
    this.audio.removeEventListener("play", this.handlePlay);
    this.audio.removeEventListener("timeupdate", this.handlePlay);
  };

  handleChangePlayingState = () => {
    const { songs, pauseSong, playSong } = this.props;
    const { isPlaying, number } = this.props.player;
    // console.log(currentSongsList);

    if (isPlaying) {
      pauseSong(songs[number], number);
    } else {
      playSong(songs[number], number);
      this.setState({ currentSongsList: songs });
      // this.setState({ number: number });
    }
  };

  handlePreviousSong = () => {
    const { songs, pauseSong, playSong } = this.props;
    const { isPlaying, number } = this.props.player;

    if (isPlaying) {
      pauseSong(this.state.currentSongsList[number], number);
    }

    number === 0
      ? playSong(songs[songs.length - 1], songs.length - 1)
      : playSong(songs[number - 1], number - 1);
  };

  handleNextSong = () => {
    const { songs, pauseSong, playSong } = this.props;
    const { isPlaying, number } = this.props.player;

    if (isPlaying) {
      pauseSong(songs[number], number);
    }

    number + 1 === songs.length
      ? playSong(songs[0], 0)
      : playSong(songs[number + 1], number + 1);
  };

  handleChangeProgress = (event, value) => {
    this.setState({ playingProgress: value });
  };

  handleChangeProgressStart = () => {
    this.removeListeners();
  };

  handleChangeProgressEnd = () => {
    this.addListeners();
    this.audio.currentTime =
      (this.state.songDuration / 100) * this.state.playingProgress;
  };

  setPlayingState = () => {
    const { isPlaying } = this.props.player;

    if (!isPlaying) {
      this.audio.pause();
      return;
    }
    this.audio.play();
  };

  handlePlay = ({ target }) => {
    const { currentTime, duration } = target;
    const currentProgress = ((currentTime / duration) * 100).toFixed(2);

    this.setState({
      songDuration: duration,
      playingProgress: Number(currentProgress)
    });

    if (this.state.playingProgress === 100) {
      this.setState({
        playingProgress: 0
      });
      this.handleNextSong();
    }
  };

  handleChangeVolume = (event, value) => {
    const volume = Number(value.toFixed(1));

    this.setState({ volumeValue: volume, isMuted: volume === 0 });
    this.audio.volume = volume;
  };

  handleMute = () => {
    this.setState(prevState => {
      const isMuted = !prevState.isMuted;
      const volume = prevState.volumeValue || 0.5;
      this.audio.volume = isMuted ? 0 : volume;
      return { isMuted, volumeValue: volume };
    });
  };

  getVolumeIcon = volume => {
    if (volume >= 0.1 && volume < 0.4) {
      return VOLUME_ICON_SET.VolumeMute;
    } else if (volume >= 0.4 && volume < 0.7) {
      return VOLUME_ICON_SET.VolumeDown;
    } else if (volume >= 0.7 && volume <= 1) {
      return VOLUME_ICON_SET.VolumeUp;
    } else {
      return VOLUME_ICON_SET.VolumeOff;
    }
  };

  render() {
    const { playingProgress, volumeValue, isMuted } = this.state;
    const { song } = this.props.player;
    const volume = isMuted ? 0 : volumeValue;
    return (
      <>
        <audio
          src={song && song.songURL}
          ref={element => (this.audio = element)}
        />
        <Player
          items={this.getItems()}
          onPlay={this.handleChangePlayingState}
          onPreviousClick={this.handlePreviousSong}
          onNextClick={this.handleNextSong}
          onChangeProgress={this.handleChangeProgress}
          progress={playingProgress}
          song={song}
          volume={volume}
          volumeIcon={this.getVolumeIcon(volume)}
          onChangeVolume={this.handleChangeVolume}
          onMute={this.handleMute}
          onChangeProgressStart={this.handleChangeProgressStart}
          onChangeProgressEnd={this.handleChangeProgressEnd}
          player={this.props.player}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songs,
    player: state.player,
    userSongs: state.userSongs,
    auth: state.auth
  };
}

const mapDispatchToProps = {
  playSong,
  pauseSong,
  addUserSong,
  removeUserSong
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);
