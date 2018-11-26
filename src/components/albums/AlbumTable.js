import React from "react";
import PropTypes from "prop-types";

function AlbumTable({ match }) {
  return <div>The chosen albumtId is: {match.params.id}</div>;
}

AlbumTable.propTypes = {
  match: PropTypes.object
};

export default AlbumTable;
