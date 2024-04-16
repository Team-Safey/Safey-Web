import axios from "axios";

export const getUser = async () => {
  const accessToken = localStorage.getItem("accessToken");
  let 반환값;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    // Add any other headers you need
  };

  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/users`, { headers })
    .then((response) => {
      반환값 = response.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        window.location.replace("/login");
      }
    });

  return 반환값;
};

export const weeklyRanking = async () => {
  let response;
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/users/week`)
    .then((res) => (response = res));
  return response.data;
};

export const monthlyRanking = async () => {
  let response;
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/users/month`)
    .then((res) => (response = res));
  return response.data;
};

export const yearlyRanking = async () => {
  let response;
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/users/year`)
    .then((res) => (response = res));
  return response.data;
};

export const logout = async () => {
  let response;
  const refreshToken = localStorage.getItem("refreshToken");
  const header = {
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${refreshToken}`,
    },
  };
  await axios
    .delete(`${process.env.REACT_APP_BASE_URL}/users/logout`, header)
    .then((res) => {
      response = res;
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      window.location.replace("/login");
    });
  console.log(response);
  return response;
};

export const delete_user = async () => {
  let response;
  const refreshToken = localStorage.getItem("refreshToken");
  const header = {
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${refreshToken}`,
    },
  };
  await axios
    .delete(`${process.env.REACT_APP_BASE_URL}/users/leave`, header)
    .then((res) => {
      response = res;
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      window.location.replace("/login");
    });
  console.log(response);
  return response;
};
