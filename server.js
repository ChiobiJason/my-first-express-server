const express = require('express');

const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Hello</h1>");
});

app.get("/contact", (request, response) => {
  response.send("Contact me at: chiobichisom@gmail.com");
});

app.get("/about", (request, response) => {
  response.send("I am Jason, Pleased to meet you!!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});