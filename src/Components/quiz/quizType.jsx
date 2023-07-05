import styled, { css } from "styled-components";
import QuizOX from "./QuizOX";
import { useState, useEffect } from "react";
import Btn from "../AnsBtn";
import JSConfetti from "js-confetti";
import Choice from "./Choice";
import StringQuiz from "./stringQuiz";
import { ox_check } from "../../apis/quiz";
import { choice_check } from "../../apis/quiz";
import { useNavigate } from "react-router-dom";

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

export default function QuizType({ data, next, indexNum }) {
  const jsConfetti = new JSConfetti();
  const unjsConfetti = new JSConfetti();
  const [answerCheck, setAnswerCheck] = useState({
    quiz_id: "0",
    user_answer: "",
  });
  const answerTrue = async () => {
    jsConfetti.addConfetti({
      confettiColors: [
        "#94A4DD",
        "#6B81D0",
        "#4863C5",
        "#364FAA",
        "#FCFCFE",
        "#C4CCEC",
      ],
      confettiRadius: 5,
      confettiNumber: 500,
    });
  };
  const answerFalse = () => {
    unjsConfetti.addConfetti({
      emojis: ["😥", "😭", "😰"],
      emojiSize: 100,
      confettiNumber: 30,
    });
  };

  async function data_load() {
    setAnswerCheck({
      ...answerCheck,
      quiz_id: String(data.quiz_id),
    });
  }

  useEffect(() => {
    if (data) {
      data_load();
    }
  }, [data]);

  //
  const [isCorrect, setIsCorrect] = useState("");

  async function onClickCheck() {
    let result;
    if (data.quiz_type === "CHOICE") {
      console.log("gu");
      result = await choice_check(answerCheck);
    } else {
      result = await ox_check(answerCheck);
    }

    setIsCorrect(result.is_correct);
    result.is_correct ? answerTrue() : answerFalse();
  }

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <Caption>{quiz_type_string?.[data?.quiz_type]}</Caption>
        <Title>{data?.title}</Title>
      </Header>
      <QuizInput
        data={data}
        select={answerCheck}
        setSelect={setAnswerCheck}
        isCorrect={isCorrect}
      />
      <Help isCorrect={isCorrect}>{data?.description}</Help>
      <Button>
        {isCorrect === "" ? (
          <Btn
            text="정답확인"
            disabled={answerCheck.user_answer === ""}
            onClick={onClickCheck}
          />
        ) : indexNum === 9 ? (
          <Btn
            text="점수확인"
            onClick={() => {
              navigate("/score");
            }}
          />
        ) : (
          <Btn
            text="다음문제"
            onClick={() => {
              setAnswerCheck({
                quiz_id: "0",
                user_answer: "",
              });
              setIsCorrect("");
              next();
            }}
          />
        )}
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
const Button = styled.div`
  display: block;
  margin-top: auto;
`;
