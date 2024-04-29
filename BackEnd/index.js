const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const { urlencoded } = require("body-parser");
const bodyparser = require("body-parser");
const Routes = require("./Routes/users.js");
const pool = require("./db");

//middlewares
app.use(morgan("dev"));

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/api", Routes);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
  if (!err) {
    console.log("server is running on port", `${PORT}`);
  } else {
    console.log("error occured", err);
  }
});
