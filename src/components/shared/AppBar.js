import React, { Component } from "react";
import classNames from "classnames";
import ProfileMenu from "./ProfileMenu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from "@material-ui/core";
import {
  AccountCircle,
  Menu,
  Search,
  Brightness1Outlined,
  Brightness1
} from "@material-ui/icons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { boundChangeTheme } from "../../store/actionCreators/theme";

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
  }
});

class AppBarComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool,
    onDrawerOpen: PropTypes.func,
    enabled: PropTypes.bool,
    boundChangeTheme: PropTypes.func,
    theme: PropTypes.object,
    palette: PropTypes.object,
    type: PropTypes.string
  };

  static defaultProps = {
    enabled: true
  };

  isCurrentThemeLight = () => {
    return this.props.theme.type === "light";
  };

  handleChangeTheme = () => {
    const nextThemeType = this.isCurrentThemeLight() ? "dark" : "light";

    this.props.boundChangeTheme(nextThemeType);
  };

  render() {
    const { classes, enabled } = this.props;

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
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          )}
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
          {enabled ? (
            <ProfileMenu />
          ) : (
            <IconButton
              aria-owns="material-appbar"
              aria-haspopup="true"
              color="inherit"
              disabled
            >
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.theme
  };
}

const mapDispatchToProps = {
  boundChangeTheme
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(AppBarComponent));
