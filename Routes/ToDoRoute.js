const router = require("express").Router();

//REGISTER
router.get("/", async (req, res) => {
  res.send(`Hello List!!`);
});

module.exports = router;
