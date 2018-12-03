import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import theme from "../theme";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import MySongs from "./mySongs/MySongs";
import Artists from "./artists/Artists";
import About from "./about/About";
import Albums from "./albums/Albums";
import ShareView from "./shareView/ShareView";
import AlbumTable from "./albums/AlbumTable";
import ArtistTable from "./artists/ArtistTable";
import NotFound from "./notFound/NotFound";
import Auth from "./auth/Auth";

import { loadArtists } from "../store/actionCreators/artists";
import { loadAlbums } from "../store/actionCreators/albums";
import { fetchUser } from "../store/actionCreators/auth";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import { connect } from "react-redux";

const styles = () => ({
  root: {
    display: "flex",
    width: "100%"
  }
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loadArtists: PropTypes.func,
    loadAlbums: PropTypes.func,
    fetchUser: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadAlbums();
    this.props.loadArtists();
    this.props.fetchUser();
  }

  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <Switch>
              <PublicRoute exact path="/login" component={Auth} />
              <PublicRoute exact path="/songs/:id" component={ShareView} />
              <Redirect exact from="/" to="/albums" />
              <PrivateRoute exact path="/mysongs" component={MySongs} />
              <PrivateRoute exact path="/albums" component={Albums} />
              <PrivateRoute exact path="/artists" component={Artists} />
              <PrivateRoute path="/about" component={About} />
              <PrivateRoute path="/albums/:id" component={AlbumTable} />
              <PrivateRoute path="/artists/:id" component={ArtistTable} />
              <PrivateRoute component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  loadArtists,
  loadAlbums,
  fetchUser
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(App));
