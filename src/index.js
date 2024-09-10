require("dotenv");
const express = require("express");
const userRouter = require("./routes");

const app = express();

app.use(userRouter);

app.use((error, req, res, next) => {
  const errorObj = {
    message: error?.message || "Something went wrong",
    status: error?.status || 500,
  };
  res.status(errorObj.status).json(errorObj);
});

app.get("/health", (req, res, next) => {
  res.status(200).json({ message: "Hello, I am okay!" });
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
