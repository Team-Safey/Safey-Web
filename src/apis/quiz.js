import axios from "axios";

//교통안전
export const traffic = async () => {
  let response;
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/quizs/traffic`)
    .then((res) => (response = res));
  return response;
};

//주거안전
export const residential = async () => {
  let response;
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/quizs/residential`)
    .then((res) => (response = res));
  return response;
};

//생활안전
export const life = async () => {
  let response;
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/quizs/life`)
    .then((res) => (response = res));
  return response;
};

//산업안전
export const industrial = async () => {
  let response;
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/quizs/industrial`)
    .then((res) => (response = res));
  return response;
};

//전체랜덤
export const random_quiz = async () => {
  let response;
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/quizs/all`)
    .then((res) => (response = res));
  return response.data;
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
    .get(`${process.env.REACT_APP_BASE_URL}/quizs/score`, header)
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
    .post(`${process.env.REACT_APP_BASE_URL}/quizs/problem`, body, header)
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
    .post(`${process.env.REACT_APP_BASE_URL}/quizs/problem/choice`, body, header)
    .then((res) => {
      response = res.data;
    });
  return response;
};

// 최근에 푼 모든문제
export const myQiuzAll = async () => {
  let response;
  const accessToken = localStorage.getItem("accessToken");
  const header = {
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  if (accessToken) {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/quizs/my/all`, header)
      .then((res) => {
        response = res;
      });
  }
  return response?.data;
};

// 내가 푼 산업안전 문제
export const myQiuzIndustrial = async () => {
  let response;
  const accessToken = localStorage.getItem("accessToken");
  const header = {
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  if (accessToken) {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/quizs/my/industrial`, header)
      .then((res) => {
        response = res;
        console.log(response.data);
      });
  }
  return response?.data;
};

// 내가 푼 생활안전 문제
export const myQiuzLife = async () => {
  let response;
  const accessToken = localStorage.getItem("accessToken");
  const header = {
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  if (accessToken) {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/quizs/my/life`, header)
      .then((res) => {
        response = res;
        console.log(response.data);
      });
  }
  return response?.data;
};

// 내가 푼 주거안전 문제
export const myQiuzResidential = async () => {
  let response;
  const accessToken = localStorage.getItem("accessToken");
  const header = {
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  if (accessToken) {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/quizs/my/residential`, header)
      .then((res) => {
        response = res;
        console.log(response.data);
      });
  }
  return response?.data;
};

// 내가 푼 교통안전 문제
export const myQiuzTraffic = async () => {
  let response;
  const accessToken = localStorage.getItem("accessToken");
  const header = {
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  if (accessToken) {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/quizs/my/traffic`, header)
      .then((res) => {
        response = res;
        console.log(response.data);
      });
  }
  return response?.data;
};
