import styled from "styled-components";

export default function QuizTap({ onClick, title, caption, img }) {
  return (
    <Container onClick={onClick}>
      <div>
        <Caption>{caption}</Caption>
        <Title>{title}</Title>
      </div>
      <IconImg>
        <img src={img} />
      </IconImg>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.1);
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 13px;
`;
const Caption = styled.p`
  font-size: 8px;
  color: #333;
`;
const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;
const IconImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  img {
    width: 50px;
  }
`;
