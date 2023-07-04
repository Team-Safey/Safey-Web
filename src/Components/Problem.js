import ProblemData from "./Problem.json";
import React from "react";
import styled from "styled-components";

const pop = Math.floor(Math.random() * (10 - 0) + 0);

export default function Problem() {
  return <ProblemBlock>{ProblemData.Problem[pop]}</ProblemBlock>;
}
const ProblemBlock = styled.div`
  width: 100%;
  height: 100%;
  padding: 1% 1% 1%;
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
`;
