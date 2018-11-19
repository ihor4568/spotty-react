import React, { Component } from "react";
import styled from "styled-components/macro";
import PlayerContainer from "./player/PlayerContainer";

const Container = styled.div`
  border: 1px solid black;
  padding: ${props => props.padding || "20px"};
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <PlayerContainer />
      </Container>
    );
  }
}
