import React from "react";
import Title from "../shared/Title";
import MySongsTable from "../shared/MySongsTable";

function MySongs() {
  return (
    <div>
      <Title name="My Songs" />
      <MySongsTable />
    </div>
  );
}

export default MySongs;
