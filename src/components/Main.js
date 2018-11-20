import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledMain = styled.div`
  flex-grow: 1;
  padding: ${props => props.theme.spacing.unit * 3}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  ${props => props.theme.mixins.toolbar};
`;

export default class Main extends React.Component {
  render() {
    return (
      <StyledMain>
        <Typography>awdawd</Typography>
      </StyledMain>
    );
  }
}
