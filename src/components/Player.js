import React from "react";
import styled from "styled-components";

const PlayerDiv = styled.div`
  color: inherit;
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background-color: ${props => props.theme.palette.primary.main};
  z-index: ${props => props.theme.zIndex.drawer + 1};
`;

export default class Player extends React.Component {
  render() {
    return <PlayerDiv />;
  }
}
