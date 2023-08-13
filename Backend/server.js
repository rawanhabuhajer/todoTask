require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const TodoRoute = require("./routes/TodoRoute");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  req.requestTime = new Date().toString();
  // console.log(req.headers);
  next();
});

//Routes
app.use("/api/todo", TodoRoute);

//connect to db
mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
