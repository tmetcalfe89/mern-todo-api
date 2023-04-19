const mongoose = require("mongoose");

const schema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("todos", schema);
