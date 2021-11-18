require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const mysql = require("mysql2");
const todoListRouter = require("./Routes/ToDoRoute");
const PORT = 8000;

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });

// console.log(connection.connect());

const Database = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todolistdatabase",
});
Database.execute("SELECT * FROM list;", (err, result) => {
  if (err) console.log(err);

  console.log(result);
});
// [Middleware]
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
  console.log("Databas: ", process.env.DATABASE);
  console.log(" password : ", process.env.PASSWORD);
});

//[Routes]
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", todoListRouter);
