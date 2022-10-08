import got from "got";

const getUser = async (userId) => {
  try {
    const response = await got("http://localhost:3000/api/user", {
      headers: {
        userId,
      },
      responseType: "json",
    });

    console.log(response.body);
  } catch (err) {
    console.log(err);
  }
};

//getUser("633e1edec50c43141e60dc7f");

const createUser = async () => {
  try {
    const response = await got.post("http://localhost:3000/api/user", {
      json: {
        name: "Agustina",
        email: "agus@mail.com",
      },
      responseType: "json",
    });

    console.log(response.body);
  } catch (err) {
    console.log(err);
  }
};

createUser();
