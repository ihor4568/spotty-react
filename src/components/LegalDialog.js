import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";

const LEGAL_DIALOG_INFO = {
  licenseInfo:
    "Back To The Sea by Adam & Alma is licensed under a Attribution-NonCommercial-NoDerivatives (aka Music Sharing) 3.0 International License.",
  licenseURL: "https://creativecommons.org/licenses/by-nc-nd/3.0/"
};

class LegalDialog extends Component {
  handleReadMore = () => {
    window.open(LEGAL_DIALOG_INFO.licenseURL);
    this.props.onClose();
  };

  render() {
    const { isOpen } = this.props;

    return (
      <Dialog
        open={isOpen}
        onClose={this.props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>License information</DialogTitle>
        <DialogContent>
          <DialogContentText>{LEGAL_DIALOG_INFO.licenseInfo}</DialogContentText>
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

LegalDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default LegalDialog;
