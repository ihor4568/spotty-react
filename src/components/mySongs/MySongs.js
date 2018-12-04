import React from "react";
import Title from "../shared/Title";
import TableLayout from "../shared/TableLayout";

function MySongs() {
  return (
    <>
      <Title name="My Songs" />
      {/* <TableLayout songs={this.props.songs} /> */}
      <TableLayout />
    </>
  );
}
export default MySongs;
