import React, { Component } from "react";
import styled from "styled-components";


const StylesDiv = styled.div`
  border: 2px solid yellow;
  position: absolute;
  left: 500px; top: 330px;
  width: 500px;
  padding: 0px 50px 0px;
`;
export class Component3 extends Component {
  render() {
    return (
      <StylesDiv>
          <h1>Certificaciones</h1>
          <p>Azure cloud</p>
      </StylesDiv>
    );
  }
}
