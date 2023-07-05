import styled from "styled-components";
import Month from "../Components/Month";
import React, { useState } from "react";
import Week from "../Components/Week";
import Year from "../Components/Year";
import { LeftArrow } from "../assets/icon";
import { useNavigate } from "react-router-dom";
export default function Ranking() {
  const navi = useNavigate();
  const [select, setSelect] = useState("");
  return (
    <>
      <Header>
        <GoBack
          onClick={() => {
            navi(-1);
          }}
        >
          <img src={LeftArrow} />
        </GoBack>
      </Header>{" "}
      <Myeongye>명예의 전당</Myeongye>
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
    </>
  );
}
const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Myeongye = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #333333;

`;
const Date = styled.div`
  justify-content: space-evenly 3px;
  display: flex;
  gap:50px;
`;
const GoBack = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  padding: 0;
  background: none;
  border: none;
  img {
    width: 20px;
  }
`;
