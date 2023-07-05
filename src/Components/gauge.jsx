import styled, { css } from "styled-components";

export default function GaugeBar({ solve }) {
  return (
    <>
      <Caption>{solve}/10 문제</Caption>
      <BackgroundBar>
        <Gauge solve={solve * 10} />
      </BackgroundBar>
    </>
  );
}

const BackgroundBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background-color: #efefef;
`;
const Gauge = styled.div`
  ${(props) =>
    css`
      width: ${props.solve + "%"};
    `}
  height: 100%;
  background-color: #4863c5;
  border-radius: 10px;
`;
const Caption = styled.p`
  font-size: 10px;
  color: #828282;
`;
