const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);
const marvelRoute = require("./routes/marvel");
const userRoute = require("./models/User");
app.use(marvelRoute);
app.use(userRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Marvel API" });
});

app.get("*", (req, res) => {
  res.status(400).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(" Server Started :-) ");
});
