import {
  myQiuzAll,
  myQiuzIndustrial,
  myQiuzLife,
  myQiuzResidential,
  myQiuzTraffic,
} from "../apis/quiz";
import styled, { css } from "styled-components";
import { LeftArrow } from "../assets/icon";
import { useNavigate } from "react-router-dom";
import MyQuizBox from "../Components/myQuizBox";
import { useRecoilState } from "recoil";
import { myQuizCategory } from "../Atom/myQuizCategory";
import { useEffect, useState } from "react";

const myQuizFunc = {
  all: myQiuzAll(), //모두
  lift: myQiuzLife(), //생활
  residential: myQiuzResidential(), // 주거
  industrial: myQiuzIndustrial(), //산업
  traffic: myQiuzTraffic(), //교통
};

export default function MyQuiz() {
  const navi = useNavigate();
  const [categoryState, setCategoryState] = useRecoilState(myQuizCategory);
  const [list, setList] = useState([]);

  const filter = async () => {
    const result = await myQuizFunc[categoryState];
    setList(result.quiz_lists);
  };

  useEffect(() => {
    filter();
  }, [categoryState]);

  return (
    <Warpper>
      <Header>
        <button onClick={() => navi(-1)}>
          <img src={LeftArrow} />
        </button>
        <p>내가 푼 문제</p>
      </Header>
      <CategoryTap>
        <CateBtn
          isSelect={categoryState === "all"}
          onClick={() => {
            setCategoryState("all");
          }}
        >
          모두
        </CateBtn>
        <CateBtn
          isSelect={categoryState === "traffic"}
          onClick={() => {
            setCategoryState("traffic");
          }}
        >
          교통안전
        </CateBtn>
        <CateBtn
          isSelect={categoryState === "industrial"}
          onClick={() => {
            setCategoryState("industrial");
          }}
        >
          산업안전
        </CateBtn>
        <CateBtn
          isSelect={categoryState === "lift"}
          onClick={() => {
            setCategoryState("lift");
          }}
        >
          생활안전
        </CateBtn>
        <CateBtn
          isSelect={categoryState === "residential"}
          onClick={() => {
            setCategoryState("residential");
          }}
        >
          주거안전
        </CateBtn>
      </CategoryTap>
      <ListBox>
        {list.map((item, index) => (
          <MyQuizBox
            key={index}
            title={item?.title}
            id={item?.quiz_id}
            isCorrect={item?.is_correct}
            data={item}
          />
        ))}
      </ListBox>
    </Warpper>
  );
}

const Warpper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  button {
    width: 33px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    position: absolute;
    left: 0;
  }
  p {
    font-size: 15px;
    color: #353642;
    font-weight: 600;
  }
`;

const ListBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CategoryTap = styled.div`
  display: flex;
  height: 36px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  gap: 10px;
`;

const CateBtn = styled.button`
  display: inline-block;
  font-weight: bold;
  border: none;
  border-radius: 14px;
  flex: 0 0 auto;
  height: 32px;
  padding: 0 20px;
  ${(props) =>
    props.isSelect
      ? css`
          background-color: #4863c5;
          color: white;
        `
      : css`
          background-color: #ffffff;
          color: black;
        `}
`;
