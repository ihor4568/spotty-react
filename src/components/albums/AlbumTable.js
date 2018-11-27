import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

function AlbumTable({ match }) {
  return (
    <Typography variant="h4" component="h2">
      The chosen albumtId is: {match.params.id}
    </Typography>
  );
}

AlbumTable.propTypes = {
  match: PropTypes.object
};

export default AlbumTable;
