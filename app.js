const express = require("express");
const cors = require("cors");
const weather = require("./weather.js");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.options("*", cors());

app.get("/weather", (req, res) => {
  const location = req.query.location;
  weather(location, (err, data) => {
    if (err) {
      return res.send({ err });
    }
    res.send(data);
  });
});

app.listen(port);
