import React, { Component } from "react";
import styled from "styled-components";

const StylesDiv = styled.div`
  border: 2px solid red;
  position: absolute;
  left: 500px;
  top: 450px;
  width: 500px;
  padding: 0px 50px 0px;
`;
const StylesSection = styled.section`
  display: flex;
`;
export class Component4 extends Component {
  render() {
    return (
      <StylesDiv>
        <h1>Habilidades</h1>
        <StylesSection>
          <p>HTML 100%</p>
          <p>JavaScript 70%</p>
          <p>CSS 50%</p>
          <p>PHP 30%</p>
        </StylesSection>
      </StylesDiv>
    );
  }
}
