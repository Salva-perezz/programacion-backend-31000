import axios from "./axios.js";

const getUser = async (userId) => {
  try {
    const response = await axios.get(`/api/user`, {
      headers: {
        userId,
      },
    });

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

const createUser = async () => {
  try {
    const response = await axios.post("/api/user", {
      name: "Jorge",
      email: "jorge@mail.com",
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

getUser("633e1edec50c43141e60dc7f");
