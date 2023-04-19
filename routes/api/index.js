const express = require("express");
const todoRoutes = require("./todo");

const router = express.Router();
router.use("/todos", todoRoutes);

module.exports = router;
