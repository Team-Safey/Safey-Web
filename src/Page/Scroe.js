import styled from "styled-components";
import Btn from "../Components/AnsBtn";
import { useNavigate } from "react-router-dom";
import { score } from "../apis/quiz";
import { useEffect, useState } from "react";

export default function Score() {
  const navigate = useNavigate();

  const [result, setResult] = useState();
  const Scroe = async () => {
    setResult(await score());
  };
  useEffect(() => {
    Scroe();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Text>
          당신의 점수는<p>{result?.total_score}점!</p>
        </Text>
      </Container>
      <Caption>
        와! {result?.total_score}점을 획득하셨어요. 순위 화면에 가면 자신의
        순위를 확일할 수 있어요.
      </Caption>
      <Button>
        <Btn
          text="홈으로"
          onClick={() => {
            navigate("/");
          }}
        />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
`;
const Button = styled.div`
  display: block;
  margin-top: auto;
`;

const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 90px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.15);
  border: 2px solid #e0e0e0;
`;

const Text = styled.div`
  display: flex;
  align-items: end;
  font-size: 18px;
  color: #000;
  font-weight: 600;
  gap: 5px;
  p {
    font-size: 40px;
    line-height: 40px;
  }
`;

const Caption = styled.p`
  margin-top: 20px;
  font-size: 14px;
  line-height: 15px;
`;
