import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class LegalDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleReadMore = () => {
    window.open("https://creativecommons.org/");
    this.handleClose();
  };

  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"License information"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            BJ Block & Dawn Pemberton is licensed under a
            Attribution-NonCommercial-NoDerivatives (aka Music Sharing) 3.0
            International License.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleReadMore} color="primary">
            READ MORE
          </Button>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default LegalDialog;
