import React, { Component } from "react";
import styled from "styled-components";


const StylesDiv = styled.div`
  border: 2px solid purple;
  position: absolute;
  left: 500px; top: 170px;
  width: 500px;
  padding: 0px 50px 0px;
`;
export class Component2 extends Component {
  render() {
    return (
      <StylesDiv>
          <h1>Experiencia</h1>
          <h3>Estudiante Geek</h3>
          <p>Corte 11 Desarrollo Frontend</p>
      </StylesDiv>
    );
  }
}
