import Btn from "../Components/AnsBtn";
import styled from "styled-components";
import Help from "../Components/Help";
import Oanswer from "../Components/O";
import Xanswer from "../Components/X";
import { useState } from "react";
import JSConfetti from "js-confetti";

export default function QuizOX() {
  const [select, setSelect] = useState("");
  const [답, set답] = useState("");
  const jsConfetti = new JSConfetti();
  const unjsConfetti = new JSConfetti();
  const answerClick = () => {
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
  const wrongAnswerClick = () => {
    unjsConfetti.addConfetti({
      emojis: ["😥", "😭", "😰"],
      emojiSize: 100,
      confettiNumber: 30,
    });
  };
  return (
    <Hom>
      <Help text="문제를 읽고 맞으면 O, 틀리면 X를 선택해주세요." />
      <Dom>
        <Oanswer
          isSelect={select === "O" && true}
          disabled={false}
          onClick={() => {
            setSelect("O");
          }}
        />
        <Xanswer
          isSelect={select === "X" && true}
          disabled={false}
          onClick={() => {
            setSelect("X");
          }}
        />
      </Dom>
      {true ? (
        <Btn
          disabled={select === "" ? true : false}
          text="정답 확인"
          답={답 === "정답" ? answerClick : wrongAnswerClick}
          onClick={() => {
            setSelect("정답");
            answerClick();
          }}
        />
      ) : (
        <Btn text="다음 문제" />
      )}
    </Hom>
  );
}
const Dom = styled.div`
  display: flex;
  justify-content: space-evenly;
  white-space: 10px;
`;

const Hom = styled.div`
  display: flex;
  flex-direction: column;
`;
