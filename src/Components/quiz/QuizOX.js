import styled from "styled-components";
import Oanswer from "./O";
import Xanswer from "./X";
import { useState, useEffect } from "react";

export default function QuizOX({ data, select, setSelect, isCorrect }) {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setAnswer(data.answer);
  }, [data]);

  return (
    <Dom>
      <Oanswer
        //option={isCorrect !== "" ? (answer === "O" ? true : false) : ""}
        //success={isCorrect && select.user_answer === data.answer}
        isCorrect={isCorrect}
        isSelect={select.user_answer === "O" && true}
        //disabled={isCorrect !== "" ? true : false}
        onClick={() => {
          setSelect({
            ...select,
            user_answer: "O",
          });
        }}
      />
      <Xanswer
        //option={isCorrect !== "" ? (answer === "O" ? true : false) : ""}
        isSelect={select.user_answer === "X" && true}
        isCorrect={isCorrect}
        //disabled={isCorrect !== "" ? true : false}
        onClick={() => {
          setSelect({
            ...select,
            user_answer: "X",
          });
        }}
      />
    </Dom>
  );
}
const Dom = styled.div`
  display: flex;
  justify-content: space-evenly;
  white-space: 10px;
  align-items: center;
  margin-bottom: 100px;
  flex: 1;
`;
