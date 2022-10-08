import http from "http";

// const options = {
//   hostname: "127.0.0.1",
//   port: 3000,
//   path: "/api/user",
//   method: "GET",
//   headers: {
//     userId: "633e1edec50c43141e60dc7f",
//   },
// };

// const req = http.request(options, (res) => {
//   console.log(`StatusCode: ${res.statusCode}`);

//   res.on("data", (data) => {
//     console.log(JSON.parse(data.toString("utf8")));
//   });
// });

// req.on("error", (err) => {
//   console.log(err);
// });

// req.end();

const data = JSON.stringify({
  name: "Pepe",
  email: "pepe09@mail.com",
});

const options = {
  hostname: "127.0.0.1",
  port: 3000,
  headers: {
    "Content-Type": "application/json",
    "Content-length": data.length,
  },
  method: "POST",
  path: "/api/user",
};

const request = http.request(options, (res) => {
  console.log(`Statuscode ${res.statusCode}`);

  res.on("data", (data) => {
    console.log(JSON.parse(data.toString("utf8")));
  });
});

request.on("error", (err) => {
  console.log(err);
});

request.write(data);

request.end();
