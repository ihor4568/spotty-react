import React, { Component } from "react";
import { connect } from "react-redux";

import { IconButton, MenuItem, Menu, Avatar } from "@material-ui/core";
import { AccountCircle, ExitToApp } from "@material-ui/icons";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { signOut } from "../../store/actionCreators/auth";

const styles = theme => ({
  exitToApp: {
    paddingRight: theme.spacing.unit
  }
});

class ProfileMenu extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    avatar: PropTypes.string
  };

  state = {
    anchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogOutClick = () => {
    this.props.signOut();
    this.handleMenuClose();
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = !!anchorEl;
    return (
      <div>
        <IconButton
          aria-owns={isMenuOpen ? "material-appbar" : undefined}
          aria-haspopup="true"
          onClick={this.handleProfileMenuOpen}
          color="inherit"
        >
          {!this.props.avatar ? (
            <AccountCircle />
          ) : (
            <Avatar
              alt={this.props.userName + " avatar"}
              src={this.props.avatar}
              className={classes.avatar}
            />
          )}
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem disabled={true}>{this.props.userName}</MenuItem>
          <MenuItem onClick={this.handleLogOutClick}>
            <div className={classes.exitToApp}>
              <ExitToApp />
            </div>
            Log Out
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.auth.user.displayName,
  avatar: state.auth.user.photoURL
});

export default connect(
  mapStateToProps,
  { signOut }
)(withStyles(styles, { withTheme: true })(ProfileMenu));
