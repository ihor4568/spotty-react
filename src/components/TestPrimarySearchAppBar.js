import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { fade } from "@material-ui/core/styles/colorManipulator";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LibraryMusic from "@material-ui/icons/LibraryMusic";
import Album from "@material-ui/icons/Album";
import PersonOutline from "@material-ui/icons/PersonOutline";
import Info from "@material-ui/icons/Info";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToApp from "@material-ui/icons/ExitToApp";

const drawerWidth = 240;

const RootDiv = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const GrowDiv = styled.div`
  flex-grow: 1;
`;

const StyledAppBar = styled(AppBar)`
  z-index: ${props => props.theme.zIndex.drawer + 1};
  transition: ${props =>
    props.theme.transitions.create(["margin", "width"], {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.leavingScreen
    })};

  &.appBarShift {
    width: calc(100% - ${drawerWidth}px);
    margin-left: ${drawerWidth}px;
    transition: ${props =>
      props.theme.transitions.create(["margin", "width"], {
        easing: props.theme.transitions.easing.easeOut,
        duration: props.theme.transitions.duration.enteringScreen
      })};
`;

const StyledIconButton = styled(IconButton)`
  margin-left: 12px;
  margin-right: 36px;

  &.hide {
    display: none;
  }
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  ${props => props.theme.mixins.toolbar};
`;

const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;
  white-space: nowrap;

  &.drawerOpen {
    width: ${drawerWidth}px;
    transition: ${props =>
      props.theme.transitions.create(["margin", "width"], {
        easing: props.theme.transitions.easing.easeOut,
        duration: props.theme.transitions.duration.enteringScreen
      })};
  }

  &.drawerClose {
    transition: ${props =>
      props.theme.transitions.create(["margin", "width"], {
        easing: props.theme.transitions.easing.sharp,
        duration: props.theme.transitions.duration.leavingScreen
      })};
    overflow-x: hidden;
    width: ${props => props.theme.spacing.unit * 7 + 1}px;
    ${props => props.theme.breakpoints.up("sm")} {
      width: ${props => props.theme.spacing.unit * 9 + 1}px;
    }
  }
`;

const StyledTitle = styled(Typography)`
  display: none;
  ${props => props.theme.breakpoints.up("sm")} {
    display: block;
  }
`;

const StyledSubTitle = styled(Typography)`
  margin-left: ${props => props.theme.spacing.unit * 2}px;
`;

const ExitToAppDiv = styled.div`
  padding-right: ${props => props.theme.spacing.unit}px;
`;

const SearchIconDiv = styled.div`
  width: ${props => props.theme.spacing.unit * 9}px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchDiv = styled.div`
  position: relative;
  border-radius: ${props => props.theme.shape.borderRadius}px;
  background-color: ${props => fade(props.theme.palette.common.white, 0.15)};

  &:hover {
    background-color: ${props => fade(props.theme.palette.common.white, 0.25)};
  }

  margin-left: 0;
  margin-right: ${props => props.theme.spacing.unit}px;
  width: 100%;
  ${props => props.theme.breakpoints.up("sm")} {
    margin-left: ${props => props.theme.spacing.unit}px;
    width: auto;
  }
`;

const StyledInputBase = styled(InputBase)`
  &.inputRoot {
    color: inherit;
    width: 100%;
  }

  &.inputInput {
    padding-top: ${props => props.theme.spacing.unit}px;
    padding-right: ${props => props.theme.spacing.unit}px;
    padding-bottom: ${props => props.theme.spacing.unit}px;
    padding-left: ${props => props.theme.spacing.unit * 10}px;
    transition: ${props => props.theme.transitions.create("width")};
    width: 100%;
    ${props => props.theme.breakpoints.up("sm")} {
      width: 120px;
      .&:focus {
        width: 200px
      }
    }
`;

class PrimarySearchAppBar extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl, open } = this.state;
    const { theme } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem disabled={true}>Random Name</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <ExitToAppDiv>
            <ExitToApp />
          </ExitToAppDiv>
          Log Out
        </MenuItem>
      </Menu>
    );

    return (
      <RootDiv>
        <CssBaseline />
        <StyledAppBar
          position="fixed"
          className={this.state.open ? "appBarShift" : null}
        >
          <StyledToolbar disableGutters={!open}>
            <StyledIconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={this.state.open ? "hide" : null}
            >
              <MenuIcon />
            </StyledIconButton>
            <StyledTitle variant="h6" color="inherit" noWrap>
              Spotty
            </StyledTitle>
            <GrowDiv />
            <SearchDiv>
              <SearchIconDiv>
                <SearchIcon />
              </SearchIconDiv>
              <StyledInputBase
                placeholder="Search…"
                classes={{
                  root: "inputRoot",
                  input: "inputInput"
                }}
              />
            </SearchDiv>
            <div>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </StyledToolbar>
        </StyledAppBar>
        <StyledDrawer
          variant="permanent"
          className={this.state.open ? "drawerOpen" : "drawerClose"}
          classes={{
            paper: this.state.open ? "drawerOpen" : "drawerClose"
          }}
          open={this.state.open}
        >
          <StyledToolbar>
            <StyledSubTitle variant="h6" color="inherit" noWrap>
              Library
            </StyledSubTitle>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </StyledToolbar>
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
          {renderMenu}
        </StyledDrawer>
      </RootDiv>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  theme: PropTypes.object.isRequired
};

export default PrimarySearchAppBar;
