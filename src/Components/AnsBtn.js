import styled, { css } from "styled-components";

export default function Btn({ disabled, text, onClick }) {
  return (
    <Jeongdab isDisabled={!disabled} disabled={disabled} onClick={onClick}>
      {text}
    </Jeongdab>
  );
}
const Jeongdab = styled.button`
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  border-radius: 12px;
  color: white;
  line-height: 50px;
  text-align: center;
  border: none;
  ${(props) =>
    props.isDisabled == true
      ? css`
          background-color: #4863c5;
        `
      : css`
          background-color: #8e9ed9;
        `}
`;
