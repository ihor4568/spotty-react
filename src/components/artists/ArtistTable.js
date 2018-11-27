import React from "react";
import PropTypes from "prop-types";
import Title from "../shared/Title";

function ArtistTable({ match }) {
  return <Title name={`The chosen artistId is: ${match.params.id}`} />;
}

ArtistTable.propTypes = {
  match: PropTypes.object
};

export default ArtistTable;
