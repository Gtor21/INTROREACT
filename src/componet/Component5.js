import React, { Component } from "react";
import styled from "styled-components";

const StylesDiv = styled.div`
  border: none;
  position: absolute;
  left: 198px;
  top: 180px;
  width: 200px;
  text-align: center;
  padding: 0px 50px 0px;
`;
const StylesH2 = styled.h2`
  color: #2bc0f3;
  font-size: 1.8em;
`;


export class Component5 extends Component {
  render() {
    return (
      <StylesDiv>
        <StylesH2>Gabriel Moises Turizo Torres</StylesH2>
        <h3>Desarrollador Frontend</h3>
        <p>Magangue/bolivar</p>
      </StylesDiv>
    );
  }
}
