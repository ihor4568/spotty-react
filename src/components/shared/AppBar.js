import React, { Component } from "react";
import classNames from "classnames";
import ProfileMenu from "./ProfileMenu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles, withTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from "@material-ui/core";

import Button from "@material-ui/core/Button";

import {
  Menu,
  Search,
  Brightness1Outlined,
  Brightness1
} from "@material-ui/icons";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setUserTheme } from "../../store/actionCreators/themes";
import { addSearchQuery } from "../../store/actionCreators/search";
import { setDefaultTheme } from "../../store/actionCreators/themes";

const styles = theme => ({
  appBar: {
    backgroundColor: theme.props.appBar.appBarBackgroundColor,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: theme.props.appBar.appBarHeight
  },
  appBarShift: {
    width: `calc(100% - ${theme.props.drawer.drawerWidth}px)`,
    marginLeft: theme.props.drawer.drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  appBarDisabled: {
    backgroundColor: theme.palette.disable,
    paddingLeft: "1.5rem"
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    marginRight: theme.spacing.unit,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  Search: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class AppBarComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool,
    onDrawerOpen: PropTypes.func,
    enabled: PropTypes.bool,
    setUserTheme: PropTypes.func,
    theme: PropTypes.object,
    palette: PropTypes.object,
    isLoggedIn: PropTypes.bool.isRequired,
    addSearchQuery: PropTypes.func,
    searchQuery: PropTypes.string,
    setDefaultTheme: PropTypes.func.isRequired
  };

  static defaultProps = {
    enabled: true
  };

  isCurrentThemeLight = () => {
    return this.props.theme.palette.type === "light";
  };

  handleChangeTheme = () => {
    const nextThemeType = this.isCurrentThemeLight() ? "dark" : "light";

    this.props.setUserTheme(nextThemeType);
  };

  handleSearchChange = e => {
    this.props.addSearchQuery(e.target.value);
  };

  shouldComponentUpdate(nextProps) {
    if (!nextProps.enabled && this.props.isLoggedIn) {
      this.props.setDefaultTheme();
    }
    return true;
  }

  render() {
    const { classes, enabled, searchQuery } = this.props;

    return (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: this.props.open,
          [classes.appBarDisabled]: !enabled
        })}
      >
        <Toolbar disableGutters={!this.props.open}>
          {enabled && (
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.onDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.props.open
              })}
            >
              <Menu />
            </IconButton>
          )}
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            Spotty
          </Typography>
          <div className={classes.grow} />
          {enabled && (
            <div className={classes.search}>
              <div className={classes.Search}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                value={searchQuery}
                onChange={this.handleSearchChange}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          )}
          {enabled && (
            <IconButton
              color="inherit"
              aria-label="Toggle light/dark theme"
              data-ga-event-category="AppBar"
              data-ga-event-action="dark"
              onClick={this.handleChangeTheme}
            >
              {this.isCurrentThemeLight() ? (
                <Brightness1Outlined />
              ) : (
                <Brightness1 />
              )}
            </IconButton>
          )}
          {enabled && <ProfileMenu />}
          {!enabled && !this.props.isLoggedIn && (
            <Button color="inherit" href="/" className={classes.button}>
              Log In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({ auth, search }) => ({
  isLoggedIn: auth.isLoggedIn,
  searchQuery: search
});

const mapDispatchToProps = {
  setUserTheme,
  addSearchQuery,
  setDefaultTheme
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme()(withStyles(styles)(AppBarComponent)));
