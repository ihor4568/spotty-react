import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./shared/Header";
import Main from "./shared/Main";
import PlayerContainer from "./player/PlayerContainer";

import theme from "../theme";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import MySongs from "./mySongs/MySongs";
import Artists from "./artists/Artists";
import About from "./about/About";
import Albums from "./albums/Albums";
import AlbumTable from "./albums/AlbumTable";
import ArtistTable from "./artists/ArtistTable";
import NotFound from "./notFound/NotFound";

import { connect } from "react-redux";
import { loadSongs } from "../store/actionCreators/mySongsTable";
import { loadAlbums } from "../store/actionCreators/albums";

const styles = () => ({
  root: {
    display: "flex",
    width: "100%"
  }
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loadSongs: PropTypes.func,
    loadAlbums: PropTypes.func
  };

  componentDidMount() {
    this.props.loadSongs();
    this.props.loadAlbums();
  }

  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <Header />
            <Main>
              <Switch>
                <Redirect exact from="/" to="/albums" />
                <Route exact path="/mysongs" component={MySongs} />
                <Route exact path="/albums" component={Albums} />
                <Route exact path="/artists" component={Artists} />
                <Route path="/about" component={About} />
                <Route path="/albums/:id" component={AlbumTable} />
                <Route path="/artists/:id" component={ArtistTable} />
                <Route component={NotFound} />
              </Switch>
            </Main>
            <PlayerContainer />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = { loadSongs, loadAlbums };

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(App));
