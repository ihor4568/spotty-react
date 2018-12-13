import Header from "../shared/Header";
import Main from "./Main";
import PlayerContainer from "../player/PlayerContainer";
import React from "react";

const MainLayout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <PlayerContainer />
  </>
);

export default MainLayout;
