import axios from "axios";

//교통안전
export const traffic = async () => {
  let response;
  await axios
    .get("http://43.202.84.47:8080/quizs/traffic")
    .then((res) => (response = res));
  return response;
};

//주거안전
export const residential = async () => {
  let response;
  await axios
    .get("http://43.202.84.47:8080/quizs/residential")
    .then((res) => (response = res));
  return response;
};

//생활안전
export const life = async () => {
  let response;
  await axios
    .get("http://43.202.84.47:8080/quizs/life")
    .then((res) => (response = res));
  return response;
};

//산업안전
export const industrial = async () => {
  let response;
  await axios
    .get("http://43.202.84.47:8080/quizs/industrial")
    .then((res) => (response = res));
  return response;
};

//전체랜덤
export const all = async () => {
  let response;
  await axios
    .get("http://43.202.84.47:8080/quizs/all")
    .then((res) => (response = res));
  return response;
};

//최근 10문제 점수보기
export const score = async () => {
  let response;
  const accessToken = localStorage.getItem("accessToken");
  const header = {
    headers: {
      Accept: `*/*`,
      Authorization: `Bearer ${accessToken}`,
    },
  };
  await axios
    .get("http://43.202.84.47:8080/quizs/score", header)
    .then((res) => (response = res));
  return response.data;
};

// OX/빈칸채우기 정답체크
export const ox_check = async (body) => {
  let response;
  const accessToken = localStorage.getItem("accessToken");
  const header = {
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  await axios
    .post("http://43.202.84.47:8080/quizs/problem", body, header)
    .then((res) => {
      response = res.data;
    });
  return response;
};

export const choice_check = async (body) => {
  let response;
  const accessToken = localStorage.getItem("accessToken");
  const header = {
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  await axios
    .post("http://43.202.84.47:8080/quizs/problem/choice", body, header)
    .then((res) => {
      response = res.data;
    });
  return response;
};
