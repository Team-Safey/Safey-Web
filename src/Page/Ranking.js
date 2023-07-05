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
      <MyRan>
        <p className="number">23</p>
        <My>
          <p className="name">김대희</p>
          <p className="Jeongdab">정답률 79.2%</p>
        </My>
        <p className="score">300점</p>
      </MyRan>
      <Ran>
        <p className="number">1</p>
        <My>
          <p className="name">김대희</p>
          <p className="Jeongdab">정답률 79.2%</p>
        </My>
        <p className="score">300점</p>
      </Ran>
      <Ran>
        <p className="number">2</p>
        <My>
          <p className="name">김대희</p>
          <p className="Jeongdab">정답률 79.2%</p>
        </My>
        <p className="score">300점</p>
      </Ran>
      <Ran>
        <p className="number">3</p>
        <My>
          <p className="name">김대희</p>
          <p className="Jeongdab">정답률 79.2%</p>
        </My>
        <p className="score">300점</p>
      </Ran>
      <Ran>
        <p className="number">4</p>
        <My>
          <p className="name">김대희</p>
          <p className="Jeongdab">정답률 79.2%</p>
        </My>
        <p className="score">300점</p>
      </Ran>
      <Ran>
        <p className="number">5</p>
        <My>
          <p className="name">김대희</p>
          <p className="Jeongdab">정답률 79.2%</p>
        </My>
        <p className="score">300점</p>
      </Ran>
      <Ran>
        <p className="number">6</p>
        <My>
          <p className="name">김대희</p>
          <p className="Jeongdab">정답률 79.2%</p>
        </My>
        <p className="score">300점</p>
      </Ran>
      <Ran>
        <p className="number">7</p>
        <My>
          <p className="name">김대희</p>
          <p className="Jeongdab">정답률 79.2%</p>
        </My>
        <p className="score">300점</p>
      </Ran>
    </>
  );
}
const My = styled.div`
  align-items: center;
  margin-left: 5%;
  .Jeongdab {
    font-size: 5px;
  }
  .name {
    font-size: 9px;
  }
`;
const Ran = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.12);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 15px;
  font-size: 15px;
  .number {
    height: 20px;
    width: 20px;
  }
  .score {
    margin-left: 50%;
    display: flex;
  }
`;
const MyRan = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 60px;
  border: 1px solid #4863c5;
  border-radius: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 15px;
  font-size: 15px;
  .number {
    height: 20px;
    width: 20px;
  }
  .score {
    margin-left: 50%;
    display: flex;
  }
`;
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
  margin-top: 20px;
  justify-content: space-evenly 3px;
  display: flex;
  gap: 50px;
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
