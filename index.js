const express = require("express");
require("dotenv").config();

const app = express();
// app.use(express.json());

const marvelRoute = require("./routes/marvel");
app.use(marvelRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Marvel API" });
});

app.get("*", (req, res) => {
  res.status(400).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(" Server Started :-) ");
});