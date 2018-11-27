import React from "react";
import PropTypes from "prop-types";
import Title from "../shared/Title";

function AlbumTable({ match }) {
  return <Title name={`The chosen albumId is: ${match.params.id}`} />;
}

AlbumTable.propTypes = {
  match: PropTypes.object
};

export default AlbumTable;
