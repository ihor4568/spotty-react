import React from "react";
import PropTypes from "prop-types";

function AlbumTable({ match }) {
  return <div>This is album id: {match.params.id}</div>;
}

AlbumTable.propTypes = {
  match: PropTypes.object
};

export default AlbumTable;
