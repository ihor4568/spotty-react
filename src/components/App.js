import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from "./shared/Header";
import Main from "./shared/Main";
import PlayerContainer from "./player/PlayerContainer";

import theme from "../theme";

import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Auth from "./Auth";
import MySongs from "./MySongs";
import Albums from "./albums/Albums";
import Artists from "./Artists";
import About from "./About";
import AlbumTable from "./albums/AlbumTable";
import ArtistTable from "./ArtistTable";
import NotFound from "./NotFound";

const styles = theme => ({
  root: {
    display: "flex",
    width: "100%"
  }
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object
  };

  render() {
    const { classes } = this.props;
    const loggedIn = true;

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <Header />
            <Main>
              <Route
                exact
                path="/"
                render={() => (loggedIn ? <Redirect to="/albums" /> : <Auth />)}
              />
              <Route exact path="/mysongs" component={MySongs} />
              <Route
                exact
                path="/albums"
                render={props => <Albums {...props} />}
              />
              <Route exact path="/artists" component={Artists} />
              <Route exact path="/about" component={About} />
              <Route path="/albums/:id" component={AlbumTable} />
              <Route path="/artists/:id" component={ArtistTable} />
              <Route component={NotFound} />
            </Main>
            <PlayerContainer />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
