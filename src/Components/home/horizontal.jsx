import styled from "styled-components";

export default function Horizontal({ title, caption, img, onClick }) {
  return (
    <Container onClick={onClick}>
      <div>
        <Caption>{caption}</Caption>
        <Title>{title}</Title>
      </div>
      {img && <IconImg src={img} />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.12);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
`;
const Caption = styled.p`
  font-size: 8px;
  color: #333;
`;
const Title = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: 600;
`;
const IconImg = styled.img`
  width: 33px;
  height: 33px;
`;
