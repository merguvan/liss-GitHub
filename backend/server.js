const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const URI = process.env.URI;
const { errorHandler, notFound } = require("./api/middlewares/error-handlers");
app.use(express.json());
app.use(express.urlencoded());
const userRouter = require("./api/routes/user");
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use(express.static("public"));

///middleware
//login
//register
// /checkauth
app.use("/user", userRouter);
app.use("/confirmation", require("./api/routes/confirmation"));

app.use(notFound);
///error status code=>404
app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(port, () => {
      console.log("Listening    on " + port);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
