const express = require("express");
const app = express();
const data = require("./staticData");
const path = require("path");

app.use(`/`, express.static(path.join(__dirname)));
const API_URL = "/api/v/1.0.0";

app.get(`${API_URL}/spaceship-services`, (_, res) => {
  return res.status(200).send(data);
});

app.listen(5000, function () {
  console.log("Node server is running..");
});
