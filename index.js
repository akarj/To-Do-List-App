const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const mysql = require("mysql");
const todoListRouter = require("./Routes/ToDoRoute");
const PORT = 8000;

// const Database = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password
//   database:"ToDoListDatabase"
// });

// [Middleware]
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

//[Routes]
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", todoListRouter);
