const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");
const port = process.env.PORT || 8080;
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");



if (!process.env.NODE_ENV) {
  app.use(logger("dev"));
}
app.use(helmet());
app.use(cors())
app.use(bodyParser.json());
app.use("/api/v1/", routes);

app.use((req, res, next) => {
  let err = new Error("Not Found.");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(`Error ${err}`);
  res.status(err.status || 500);
  res.send({ error: err.message, status: err.status });
});

app.listen(port, () => {
  console.log(`Worker ${process.pid} listening at port: ${port}`);
});

module.exports = app;
