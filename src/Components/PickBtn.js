import styled, { css } from "styled-components";

export default function PickBtn({ disabled, text, onClick }) {
  return (
    <Div>
      <Seontaegji isDisabled={disabled} disabled={disabled} onClick={onClick}>
        화장실에 가서 숨는다.
      </Seontaegji>
      <Seontaegji isDisabled={disabled} disabled={disabled} onClick={onClick}>
        창문을 부수고 도망간다.
      </Seontaegji>
      <Seontaegji isDisabled={disabled} disabled={disabled} onClick={onClick}>
        경비 아져씨를 부른다
      </Seontaegji>
      <Seontaegji isDisabled={disabled} disabled={disabled} onClick={onClick}>
        경찰서에 신고한다.
      </Seontaegji>
    </Div>
  );
}
const Div = styled.div`
  align-items: center;
`;
const Seontaegji = styled.button`
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  border-radius: 12px;
  color: black;
  line-height: 50px;
  text-align: center;
  background-color: #f8f8f8;
  border: solid 1px #e1e1e1;
  ${(props) =>
    props.isDisabled == true
      ? css`
          border: solid 2px #4863c5;
        `
      : css`
          border: solid 1px #e1e1e1;
        `}
`;
