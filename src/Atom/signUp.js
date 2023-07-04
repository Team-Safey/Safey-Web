import { atom } from "recoil";

export const signUpTextState = atom({
  key: "signUpState",
  default: {
    id: "",
    email: "",
    password: "",
    password_check: "",
  },
});
