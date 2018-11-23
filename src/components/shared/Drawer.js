import React, { Component } from "react";
import classNames from "classnames";

import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { withStyles } from "@material-ui/core/styles";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LibraryMusic from "@material-ui/icons/LibraryMusic";
import Album from "@material-ui/icons/Album";
import PersonOutline from "@material-ui/icons/PersonOutline";
import Info from "@material-ui/icons/Info";
import PropTypes from "prop-types";

const styles = theme => ({
  drawer: {
    width: theme.props.drawer.drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: theme.props.drawer.drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    zIndex: 1
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    },
    zIndex: 1
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  subtitle: {
    marginLeft: theme.spacing.unit * 2
  }
});

class DrawerComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    open: PropTypes.func.isRequired,
    onDrawerClose: PropTypes.func.isRequired
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: this.props.open,
          [classes.drawerClose]: !this.props.open
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: this.props.open,
            [classes.drawerClose]: !this.props.open
          })
        }}
        open={this.props.open}
      >
        <div className={classes.toolbar}>
          <Typography
            className={classes.subtitle}
            variant="h6"
            color="inherit"
            noWrap
          >
            Library
          </Typography>
          <IconButton onClick={this.props.onDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <LibraryMusic />
            </ListItemIcon>
            <ListItemText primary="My Songs" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Album />
            </ListItemIcon>
            <ListItemText primary="Albums" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonOutline />
            </ListItemIcon>
            <ListItemText primary="Artists" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerComponent);
