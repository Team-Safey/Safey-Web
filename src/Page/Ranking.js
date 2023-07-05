import styled from "styled-components";
import Month from "../Components/Month";
import React, { useState } from "react";
import Week from "../Components/Week";
import Year from "../Components/Year";

export default function Ranking() {
  const [select, setSelect] = useState("");
  return (
    <Gray>
      <Myeongye>명예의전당</Myeongye>
      <Date>
        <Week
          isSelect={select === "이번 주" && true}
          disabled={false}
          onClick={() => {
            setSelect("이번 주");
          }}
        />
        <Month
          isSelect={select === "이번 달" && true}
          disabled={false}
          onClick={() => {
            setSelect("이번 달");
          }}
        />
        <Year
          isSelect={select === "올해" && true}
          disabled={false}
          onClick={() => {
            setSelect("올해");
          }}
        />
      </Date>
    </Gray>
  );
}
const Myeongye = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
const Date = styled.div`
  justify-content: space-evenly 3px;
  display: flex;
`;
const Gray = styled.div`
  background-color: #f8f8f8;
`;
