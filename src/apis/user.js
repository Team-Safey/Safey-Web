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
      console.error(error);
    });

  return 반환값;
};
