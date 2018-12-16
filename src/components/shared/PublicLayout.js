import React from "react";
import Main from "../main/Main";
import AppBar from "./AppBar";

const PublicLayout = ({ children }) => (
  <>
    <AppBar enabled={false} />
    <Main>{children}</Main>
  </>
);

export default PublicLayout;
