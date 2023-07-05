import styled from "styled-components";
import QuizOX from "./QuizOX";
import { useState } from "react";
import Btn from "../AnsBtn";
import JSConfetti from "js-confetti";
import Choice from "./Choice";
import StringQuiz from "./stringQuiz";

const quiz_type_string = {
  OX: "문제를 읽고 맞으면 O, 틀리면 X를 선택해주세요.",
  choice: "문제를 읽고 4개의 답 중 하나를 선택해 주세요",
  answer: "문제를 읽고 빈칸에 알맞은 글자를 작성해주세요.",
};

function QuizInput({ data, select, setSelect }) {
  switch (data.quiz_type) {
    case "OX":
      return <QuizOX data={data} select={select} setSelect={setSelect} />;
    case "choice":
      return <Choice data={data} select={select} setSelect={setSelect} />;
    case "answer":
      return <StringQuiz data={data} state={select} setState={setSelect} />;
    default:
      return;
  }
}

export default function QuizType({ data }) {
  const jsConfetti = new JSConfetti();
  const unjsConfetti = new JSConfetti();
  const answerTrue = () => {
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
  const [select, setSelect] = useState("");
  const [answerCheck, setAnswerCheck] = useState({
    quizId: data.quizId,
    userAnswer: "",
  });

  //
  let isCorrect = true;
  //

  return (
    <Wrapper>
      <Header>
        <Caption>{quiz_type_string[data.quiz_type]}</Caption>
        <Title>{data.title}</Title>
      </Header>
      <QuizInput data={data} select={answerCheck} setSelect={setAnswerCheck} />
      <Help>{data.description}</Help>
      <Button>
        <Btn
          text="정답확인"
          disabled={answerCheck.userAnswer === ""}
          onClick={() => {
            isCorrect ? answerTrue() : answerFalse();
          }}
        />
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
`;
const Button = styled.div`
  display: block;
  margin-top: auto;
`;
