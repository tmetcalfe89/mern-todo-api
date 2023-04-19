const express = require("express");
const todoModel = require("../../models/todo");

const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await todoModel.find({});
  res.json(todos);
});

router.get("/:id", async (req, res) => {
  const todo = await todoModel.findById(req.params.id);
  if (!todo) {
    res.sendStatus(404);
    return;
  }
  res.json(todo);
});

router.post("/", async (req, res) => {
  try {
    const newTodo = await todoModel.create(req.body);
    res.json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
      body: req.body,
    });
  }
});

router.put("/:id", async (req, res) => {
  const todo = await todoModel.findById(req.params.id);
  if (!todo) {
    res.sendStatus(404);
    return;
  }
  const { description, complete } = req.body;
  todo.description = description === undefined ? todo.description : description;
  todo.complete = complete === undefined ? todo.complete : complete;
  await todo.save();
  res.json(todo);
});

router.delete("/:id", async (req, res) => {
  const todo = await todoModel.findById(req.params.id);
  if (!todo) {
    res.sendStatus(404);
    return;
  }
  await todoModel.findByIdAndDelete(req.params.id);
  res.json(todo);
});

module.exports = router;
