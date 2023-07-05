import styled from "styled-components";
import Gyotong from "../Components/Gyotong";
import React, { useState } from "react";
import Saenghwal from "../Components/Saenghwal";
import Saneob from "../Components/Saneob";
import Jugeo from "../Components/Jugeo";

export default function Ranking() {
  const [select, setSelect] = useState("");
  return (
    <Gray>
      <Myeongye>명예의전당</Myeongye>
      <Date>
        <Gyotong
          isSelect={select === "교통 안전" && true}
          disabled={false}
          onClick={() => {
            setSelect("교통 안전");
          }}
        />
        <Saenghwal
          isSelect={select === "생활 안전" && true}
          disabled={false}
          onClick={() => {
            setSelect("생활 안전");
          }}
        />
        <Saneob
          isSelect={select === "산업 안전" && true}
          disabled={false}
          onClick={() => {
            setSelect("산업 안전");
          }}
        />
        <Jugeo
          isSelect={select === "주거 안전" && true}
          disabled={false}
          onClick={() => {
            setSelect("주거 안전");
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
