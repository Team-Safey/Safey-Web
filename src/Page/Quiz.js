import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Quiz() {
  const { category } = useParams();
  return (
    <>
      <Header>
        <div>백</div>
        <div>{category}</div>
      </Header>
    </>
  );
}

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: aqua;
  display: flex;
`;
