const express = require("express");
const connectDB = require("./db");

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.json({ status: "OK" });
});

app.get("*", (_req, _res, next) => {
  const error = {
    status: 404,
    message: "Resource not found",
  };
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err);
  const message = err.message ? err.message : "Server Error Occured";
  const status = err.status ? err.status : 500;

  res.status(status).json({
    message,
  });
});

connectDB("mongodb://localhost:27017/attendance-db")
  .then(() => {
    console.log("Database Connected!");
    app.listen(4000, () => {
      console.log("Server is listening on port 4000");
    });
  })
  .catch((e) => console.log(e));
