const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");

const PORT = 8000;

// [Middleware]
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

//[Routes]
app.get("/", (req, res) => {
  res.send("Hello World!");
});
