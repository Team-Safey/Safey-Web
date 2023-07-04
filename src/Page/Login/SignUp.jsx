import { styled } from "styled-components";
import TextInput from "../../Components/input";
import { useState, useEffect } from "react";
import { Logo } from "../../assets";
import { LeftArrow } from "../../assets/icon";
import Btn from "../../Components/AnsBtn";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../apis/auth";

export default function SignUp() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    password_check: "",
  });
  const [disabledState, setDisabledState] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      state.name !== "" &&
      state.email !== "" &&
      state.password !== "" &&
      state.password_check !== ""
    ) {
      setDisabledState(false);
    } else {
      setDisabledState(true);
    }
  }, [state]);

  return (
    <>
      <GoBack>
        <BackBtn onClick={() => navigate(-1)}>
          <img src={LeftArrow} />
        </BackBtn>
      </GoBack>
      <Title>
        <LogoImg src={Logo} />
        <Text>Sign Up</Text>
      </Title>
      <TextFiled>
        <TextInput
          placeholder="이름을 입력해 주세요"
          value={state.name}
          onChange={(e) => {
            setState({
              ...state,
              name: e.target.value,
            });
          }}
        />
        <TextInput
          placeholder="이메일을 입력해 주세요"
          value={state.email}
          onChange={(e) =>
            setState({
              ...state,
              email: e.target.value,
            })
          }
        />
        <TextInput
          placeholder="비밀번호"
          value={state.password}
          onChange={(e) =>
            setState({
              ...state,
              password: e.target.value,
            })
          }
        />
        <TextInput
          placeholder="비밀번호 확인"
          value={state.password_check}
          onChange={(e) =>
            setState({
              ...state,
              password_check: e.target.value,
            })
          }
        />
        <Btn
          text="회원가입"
          disabled={disabledState}
          onClick={() => {
            signUp({
              email: state.email,
              name: state.name,
              password: state.password,
            }).then((response) => {
              if (response) {
                navigate("/");
              }
            });
          }}
        />
      </TextFiled>
    </>
  );
}

const GoBack = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;
const BackBtn = styled.button`
  width: 26px;
  height: 26px;
  padding: 0;
  background: none;
  border: none;
`;

const Title = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 10px;
`;
const LogoImg = styled.img`
  width: 30px;
  height: 30px;
`;
const Text = styled.p`
  font-size: 24px;
  font-weight: 900;
  color: #3e4241;
`;
const TextFiled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
