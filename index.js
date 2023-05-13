const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);
const marvel = require("./routes/marvel");
const user = require("./routes/user");
app.use(marvel);
app.use(user);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Marvel API" });
});

app.get("*", (req, res) => {
  res.status(400).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(" Server Started :-) ");
});
