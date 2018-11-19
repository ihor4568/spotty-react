import React, { Component } from "react";
import styled from "styled-components/macro";
import PlayerContainer from "./player/PlayerContainer";

const Container = styled.div``;

export default class App extends Component {
  render() {
    return (
      <Container>
        <PlayerContainer />
      </Container>
    );
  }
}
