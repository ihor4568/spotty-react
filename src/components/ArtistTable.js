import React from "react";
import PropTypes from "prop-types";

function ArtistTable({ match }) {
  return <div>This is artist id: {match.params.id}</div>;
}

ArtistTable.propTypes = {
  match: PropTypes.object
};

export default ArtistTable;
