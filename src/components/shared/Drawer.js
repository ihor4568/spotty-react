import React, { Component } from "react";
import classNames from "classnames";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  Drawer,
  IconButton,
  Typography,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  ChevronLeft,
  ChevronRight,
  LibraryMusic,
  Album,
  PersonOutline,
  Info
} from "@material-ui/icons";

const MySongsLink = props => <Link to="/mysongs" {...props} />;
const AlbumsLink = props => <Link to="/albums" {...props} />;
const ArtistsLink = props => <Link to="/artists" {...props} />;
const AboutLink = props => <Link to="/about" {...props} />;

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
    open: PropTypes.bool.isRequired,
    onDrawerClose: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  };

  render() {
    const {
      classes,
      location: { pathname },
      theme
    } = this.props;

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
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            component={MySongsLink}
            selected={"/mysongs" === pathname}
          >
            <ListItemIcon>
              <LibraryMusic />
            </ListItemIcon>
            <ListItemText primary="My Songs" />
          </ListItem>
          <ListItem
            button
            component={AlbumsLink}
            selected={"/albums" === pathname}
          >
            <ListItemIcon>
              <Album />
            </ListItemIcon>
            <ListItemText primary="Albums" />
          </ListItem>
          <ListItem
            button
            component={ArtistsLink}
            selected={"/artists" === pathname}
          >
            <ListItemIcon>
              <PersonOutline />
            </ListItemIcon>
            <ListItemText primary="Artists" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            component={AboutLink}
            selected={"/about" === pathname}
          >
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

export default withRouter(
  withStyles(styles, { withTheme: true })(DrawerComponent)
);
