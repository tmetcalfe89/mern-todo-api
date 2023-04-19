require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const { PORT = 3000, MONGO_URI = "0.0.0.0" } = process.env;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect(MONGO_URI);
app.listen(PORT);
