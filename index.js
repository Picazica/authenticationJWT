const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRoute = require("./routes/posts");

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () =>
  console.log("connected to db")
);

//Body parser Middleware

app.use(express.json());

//Import Routes

const authRoute = require("./routes/auth");

//Route midelware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.listen(3000, () => console.log("Server started"));
