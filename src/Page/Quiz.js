import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import GaugeBar from "../Components/gauge";
import { LeftArrow } from "../assets/icon";
import { useNavigate } from "react-router-dom";
import { traffic, life, residential, industrial } from "../apis/quiz";
import QuizType from "../Components/quiz/quizType";

const categoryName = {
  교통안전: traffic(),
  생활안전: life(),
  주거안전: residential(),
  산업안전: industrial(),
};

export default function Quiz() {
  const { category } = useParams();
  const navi = useNavigate();
  const [quizList, setQuizList] = useState([]);
  const [quizNumber, setQuiNumber] = useState(0);

  async function quiz() {
    const result = await categoryName[category];
    setQuizList(result.data.quiz_lists);
  }

  useEffect(() => {
    quiz();
  }, []);

  return (
    <Container>
      <Header>
        <GoBack onClick={() => navi(-1)}>
          <img src={LeftArrow} />
        </GoBack>
        <p>{category}</p>
      </Header>
      <GaugeBar solve={quizNumber + 1} />
      <QuizType
        indexNum={quizNumber}
        data={quizList[quizNumber]}
        next={() => {
          setQuiNumber((pre) => pre + 1);
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100vh;
  padding-bottom: 40px;
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
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
const QuizBox = styled.div`
  width: 100%;
  flex: 1;
  background-color: aqua;
`;
