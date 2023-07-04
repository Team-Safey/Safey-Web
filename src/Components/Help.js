import styled from "styled-components";

export default function Help({text}) {
  return <Div>{text}</Div>;
}
const Div = styled.div`
  font-size: 10px;
  color: gray;
`;
