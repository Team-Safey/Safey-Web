import styled, { css } from "styled-components";
import { myQuizData } from "../Atom/myQuizData";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { LeftArrow } from "../assets/icon";
import QuizOX from "../Components/quiz/QuizOX";
import Choice from "../Components/quiz/Choice";
import StringQuiz from "../Components/quiz/stringQuiz";
import Btn from "../Components/AnsBtn";

const quiz_type_string = {
  OX: "문제를 읽고 맞으면 O, 틀리면 X를 선택해주세요.",
  CHOICE: "문제를 읽고 4개의 답 중 하나를 선택해 주세요",
  BLANK: "문제를 읽고 빈칸에 알맞은 글자를 작성해주세요.",
};

function QuizInput({ data, select, setSelect, isCorrect }) {
  switch (data?.quiz_type) {
    case "OX":
      return (
        <QuizOX
          data={data}
          select={select}
          setSelect={setSelect}
          isCorrect={isCorrect}
        />
      );
    case "CHOICE":
      return (
        <Choice
          data={data}
          select={select}
          setSelect={setSelect}
          isCorrect={isCorrect}
        />
      );
    case "BLANK":
      return (
        <StringQuiz
          data={data}
          state={select}
          setState={setSelect}
          isCorrect={isCorrect}
        />
      );
    default:
      return;
  }
}

export default function DetailMyQuiz() {
  const navi = useNavigate();
  const [dataState, setDataState] = useRecoilState(myQuizData);
  console.log(dataState);
  return (
    <Warpper>
      <Header>
        <GoBack onClick={() => navi(-1)}>
          <img src={LeftArrow} />
        </GoBack>
        <p>{dataState.quiz_id}번</p>
      </Header>
      <Wrapper>
        <Question>
          <Caption>{quiz_type_string?.[dataState?.quiz_type]}</Caption>
          <Title>{dataState?.title}</Title>
        </Question>
        <QuizInput
          data={dataState}
          select={{
            quiz_id: dataState.quiz_id,
            user_answer: dataState.user_answer,
          }}
          isCorrect={dataState.is_correct}
        />
        <Help>{dataState?.description}</Help>
        <Button>
          <Btn
            text="닫기"
            onClick={() => {
              navi(-1);
            }}
          />
        </Button>
      </Wrapper>
    </Warpper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const Button = styled.div`
  display: block;
  margin-top: auto;
`;
const Help = styled.p`
  font-size: 12px;
  color: #000;
  line-height: 13px;
  margin-bottom: 10px;
  ${(props) =>
    props.isCorrect === "" &&
    css`
      color: transparent;
    `}
`;
const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;
const Container = styled.div`
  margin-top: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const InputBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  p {
    font-size: 15px;
    justify-self: center;
  }
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

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
`;

const Caption = styled.p`
  font-size: 10px;
  color: #828282;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 17px;
`;
