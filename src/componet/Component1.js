import React, { Component } from "react";
import styled from "styled-components";


const StylesDiv = styled.div`
  border: 2px solid orange;
  position: absolute;
  left: 500px; top: 10px;
  width: 500px;
  padding: 0px 50px 0px;
`;
export class Component1 extends Component {
  render() {
    return (
      <StylesDiv>
          <h1>Mis Estudios</h1>
          <h3>CUN-2022</h3>
          <p>INGENIERO DE SISTEMAS</p>
      </StylesDiv>
    );
  }
}
