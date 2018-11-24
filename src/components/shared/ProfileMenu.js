import React, { Component } from "react";

import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToApp from "@material-ui/icons/ExitToApp";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  exitToApp: {
    paddingRight: theme.spacing.unit
  }
});

class ProfileMenu extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
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
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem disabled={true}>Random Name</MenuItem>
          <MenuItem onClick={this.handleMenuClose}>
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

export default withStyles(styles, { withTheme: true })(ProfileMenu);
