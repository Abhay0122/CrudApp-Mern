require("dotenv").config({ path: "./.env" });
const express = require("express");
const server = express();
const cors = require("cors");

// DB
require("./model/database").DbConnection();

const logging = require("morgan");
server.use(logging("tiny"));

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// routes
const indexRoute = require("./routes/taskRoutes");
server.use("/api", indexRoute);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
