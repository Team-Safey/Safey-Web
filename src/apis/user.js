import axios from "axios";

export const getUser = async () => {
  const accessToken = localStorage.getItem("accessToken");
  let 반환값;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    // Add any other headers you need
  };

  await axios
    .get("http://43.202.84.47:8080/users", { headers })
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
