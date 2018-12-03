import React, { Component } from "react";

import Title from "../shared/Title";
import TableLayout from "../shared/TableLayout";

const TABLE_DATA = [
  {
    name: "It was a good day",
    duration: "5.12",
    artistsNames: ["Ice Cube"],
    album: {
      name: "The Predator 1992",
      coverURL:
        "https://cs4.pikabu.ru/post_img/2016/06/23/2/1466644368111684747.png"
    }
  },
  {
    name: "Numb",
    duration: "3.07",
    artistsNames: ["Linkin Park"],
    album: {
      name: "Meteora",
      coverURL:
        "https://i.pinimg.com/originals/55/86/39/5586394e2ce162b044d9d49e412f9ece.png"
    }
  },
  {
    name: "Just Lose It",
    duration: "4.06",
    artistsNames: ["Eminem"],
    album: {
      name: "Encore",
      coverURL:
        "https://hiphop4real.com/wp-content/uploads/2016/07/Eminem-Revival-Era-2017-ePro-600x600.jpg"
    }
  }
];

class MySongsTable extends Component {
  render() {
    return (
      <>
        <Title name="My Songs" />
        <TableLayout songs={TABLE_DATA} />
      </>
    );
  }
}

export default MySongsTable;
