import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

function ArtistTable({ match }) {
  return (
    <Typography variant="h4" component="h2">
      The chosen artistId is: {match.params.id}
    </Typography>
  );
}

ArtistTable.propTypes = {
  match: PropTypes.object
};

export default ArtistTable;
