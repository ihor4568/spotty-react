import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import ThemeProvider from "./shared/ThemeProvider";
import MySongs from "./mySongs/MySongs";
import Artists from "./artists/Artists";
import About from "./about/About";
import Albums from "./albums/Albums";
import AlbumTable from "./albums/AlbumTable";
import ArtistTable from "./artists/ArtistTable";
import NotFound from "./notFound/NotFound";
import Auth from "./auth/Auth";

import { connect } from "react-redux";
import { fetchUserAndTheme } from "../store/actionCreators/auth";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const styles = () => ({
  root: {
    display: "flex"
  }
});

export class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    fetchUserAndTheme: PropTypes.func.isRequired,
    user: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchUserAndTheme();
  }

  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider>
        <BrowserRouter>
          <div className={classes.root}>
            <Switch>
              <PublicRoute exact path="/login" component={Auth} />
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
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = {
  fetchUserAndTheme
};

export const ThemedApp = withStyles(styles)(App);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemedApp);
