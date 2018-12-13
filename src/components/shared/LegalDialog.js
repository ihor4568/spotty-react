import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";

class LegalDialog extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    licenseInfo: PropTypes.string.isRequired,
    licenseURL: PropTypes.string.isRequired
  };

  handleReadMore = () => {
    window.open(this.props.licenseURL);
    this.props.onClose();
  };

  render() {
    const { isOpen, licenseInfo } = this.props;

    return (
      <Dialog
        open={isOpen}
        onClose={this.props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>License information</DialogTitle>
        <DialogContent>
          <DialogContentText>{licenseInfo}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleReadMore} color="primary">
            READ MORE
          </Button>
          <Button onClick={this.props.onClose} color="primary" autoFocus>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default LegalDialog;
