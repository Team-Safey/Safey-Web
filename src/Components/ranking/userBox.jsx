import styled, { css } from "styled-components";
import { Crown } from "../../assets/icon";

export default function UserRank({ ranke, name, correct_rate, score, isMy }) {
  const rounded = Math.round(correct_rate * Math.pow(10, 1)) / Math.pow(10, 1);
  return (
    <Container ranke={ranke} isMy={isMy}>
      <Rank>{ranke}</Rank>
      <User>
        <p>{name}</p>
        <p>{correct_rate && `정답률 ${rounded}%`}</p>
        {isMy !== true && ranke === 1 && (
          <MedalBox>
            <img src={Crown} />
          </MedalBox>
        )}
      </User>
      <Score>{score}점</Score>
    </Container>
  );
}

const MedalBox = styled.div`
  position: absolute;
  transform: rotate(0.05turn);
  width: 20px;
  height: 20px;
  display: flex;
  right: -11px;
  top: 4px;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.1);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 8px;
  ${(props) =>
    props.isMy
      ? css`
          border-color: #4863c5;
          border-width: 2px;
        `
      : props.ranke === 1 &&
        css`
          border-color: #ffc700;
          border-width: 2px;
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
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p:nth-child(1) {
    font-size: 14px;
    color: #3f3c42;
    font-weight: 600;
  }
  p:nth-child(2) {
    font-size: 12px;
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
