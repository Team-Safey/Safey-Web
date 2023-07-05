import styled, { css } from "styled-components";

export default function Saenghwal({ disabled, onClick, isSelect }) {
  return (
    <Saenghwals
      isSelect={isSelect}
      isDisabled={disabled}
      disabled={disabled}
      onClick={onClick}
    >
      생활 안전
    </Saenghwals>
  );
}
const Saenghwals = styled.button`
  font-weight: bold;
  border: none;
  border-radius: 16px;
  width: 100%;
  height: 32px;
  ${(props) =>
    props.isSelect == true
      ? css`
          background-color: #4863c5;
          color: white;
        `
      : css`
          background-color: #ffffff;
          color: black;
        `}
`;
