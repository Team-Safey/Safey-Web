import styled from "styled-components";
import Oanswer from "./O";
import Xanswer from "./X";

export default function QuizOX({ data, select, setSelect }) {
  return (
    <Dom>
      <Oanswer
        isSelect={select.userAnswer === "O" && true}
        disabled={false}
        onClick={() => {
          setSelect({
            ...select,
            userAnswer: "O",
          });
        }}
      />
      <Xanswer
        isSelect={select.userAnswer === "X" && true}
        disabled={false}
        onClick={() => {
          setSelect({
            ...select,
            userAnswer: "X",
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
