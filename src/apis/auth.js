import axios from "axios";

export const signUp = async (body) => {
  let i;
  await axios
    .post(`${process.env.REACT_APP_BASE_URL}/users`, body)
    .then((response) => {
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);
      i = 1;
    })
    .catch(() => (i = 0));
  return i;
};

export const login = async (body) => {
  let i;
  await axios
    .post(`${process.env.REACT_APP_BASE_URL}/users/token`, body)
    .then((response) => {
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);
      i = 1;
    })
    .catch((error) => {
      i = 0;
    });
  return i;
};
