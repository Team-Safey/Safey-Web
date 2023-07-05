import { useParams } from "react-router-dom";
import styled from "styled-components";
import GaugeBar from "../Components/gauge";

export default function Quiz() {
  const { category } = useParams();
  return (
    <Container>
      <Header>
        <div>백</div>
        <div>{category}</div>
      </Header>
      <GaugeBar solve={2} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;
