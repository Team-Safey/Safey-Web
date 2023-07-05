import styled, { css } from "styled-components";
import { useRecoilState } from "recoil";
import { myQuizData } from "../Atom/myQuizData";
import { useNavigate } from "react-router-dom";

export default function MyQuizBox({ id, title, isCorrect, data }) {
  const [dataState, setDataState] = useRecoilState(myQuizData);
  const navi = useNavigate();
  return (
    <Container
      onClick={() => {
        setDataState(data);
        console.log(data);
        navi("/profile/myQuiz/detail");
      }}
    >
      <TitleBox>
        <p>{id}번</p>
        <p>{title}</p>
      </TitleBox>
      <CorrectBox isCorrect={isCorrect}>
        {isCorrect ? "정답" : "오답"}
      </CorrectBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 55px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.1);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  height: 100%;
  p:nth-child(1) {
    font-size: 14px;
    font-weight: 600;
    color: #3f3c42;
  }
  p:nth-child(2) {
    font-size: 12px;
    max-width: 62vw;
    color: #5c5961;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const CorrectBox = styled.div`
  height: 100%;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  ${(props) =>
    props.isCorrect
      ? css`
          color: #68cd72;
        `
      : css`
          color: #e54949;
        `}
`;
