import styled, { css } from "styled-components";

export default function TextInput({
  isSuccess,
  isError,
  value,
  placeholder,
  onChange,
}) {
  return (
    <>
      <Container
        type="text"
        isSuccess={isSuccess}
        isError={isError}
        disabled={isSuccess || isError}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

const Container = styled.input`
  width: 100%;
  height: 48px;
  background-color: white;
  border-radius: 15px;
  padding: 16px;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.1);
  outline: none;
  ${(props) =>
    props.isSuccess
      ? css`
          border: 2px solid #68cd72;
        `
      : props.isError
      ? css`
          border: 2px solid #e54949;
        `
      : css`
          border: 1px solid #e0e0e0;
        `}
`;