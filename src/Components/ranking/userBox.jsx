import styled, { css } from "styled-components";

export default function UserRank({ ranke, name, correct_rate, score, isMy }) {
  return (
    <Container isMy={isMy}>
      <Rank>{ranke}</Rank>
      <User>
        <p>{name}</p>
        <p>{correct_rate && `정답률 ${correct_rate}%`}</p>
      </User>
      <Score>{score}점</Score>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.10);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 8px;
  ${(props) =>
    props.isMy &&
    css`
      border-color: #4863c5;
    `}
`;
const Rank = styled.div`
  width: 33px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #1f1e21;
  font-weight: 600;
`;
const User = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p:nth-child(1) {
    font-size: 12px;
    color: #3f3c42;
    font-weight: 600;
  }
  p:nth-child(2) {
    font-size: 10px;
    color: #5c5961;
    font-weight: 600;
  }
`;
const Score = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  margin-right: 10px;
  font-weight: 600;
  font-size: 15px;
`;
