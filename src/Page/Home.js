import styled from "styled-components";
import { Logo } from "../assets/index";
import QuizTap from "../Components/home/quizTap";
import Horizontal from "../Components/home/horizontal";
import { Home_Icon, Hammer, Bed, Car, Refresh } from "../assets/icon";
import { useNavigate } from "react-router-dom";
import { getUser } from "../apis/user";
import { useState, useEffect } from "react";

const quizPackage = [
  {
    title: "주거안전",
    caption: "우리집 안전은 내가 지킨다!",
    img: Home_Icon,
  },
  {
    title: "산업안전",
    caption: "일은 중요하니까",
    img: Hammer,
  },
  {
    title: "교통안전",
    caption: "교통사고 조심하세요!",
    img: Car,
  },
  {
    title: "생활안전",
    caption: "생활속 위험에서 벗어나세요",
    img: Bed,
  },
];

export default function Home() {
  const navi = useNavigate();
  const [name, setName] = useState("");

  async function userName() {
    try {
      const result = await getUser();
      setName(result.name);
    } catch (e) {}
  }

  useEffect(() => {
    userName();
  }, []);

  return (
    <>
      <UserContainer>
        <Hello>
          <img src={Logo} />
          <HelloText>{name}님 안녕하세요 :)</HelloText>
        </Hello>
        <Caption>문제를 풀면서 안전 지식을 늘려보아요!</Caption>
      </UserContainer>
      <Taps>
        <Horizontal
          title="랜덤으로 문제풀기"
          caption="어떤 문제를 풀어야 할지 모르겠다구요?"
          img={Refresh}
        />

        <QuizGrid>
          {quizPackage.map((item, index) => (
            <QuizTap
              key={index}
              title={item.title}
              caption={item.caption}
              img={item.img}
              onClick={() => navi(`/quiz/${item.title}`)}
            />
          ))}
        </QuizGrid>
        <Horizontal
          title="명예의 전당"
          caption="문제를 가장 잘 해결한 사람을 만나보세요!"
          onClick={() => navi("/ranking")}
        />
      </Taps>
    </>
  );
}

const UserContainer = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 70px;
`;
const Hello = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 35px;
    height: 35px;
  } 
`;
const HelloText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #333333;
`;
const Caption = styled.p`
  color: #333;
  font-size: 10px;
`;

const QuizGrid = styled.div`
  display: grid;
  gap: 15px;
  width: 100%;
  height: 90vw;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
const Taps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
