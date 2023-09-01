const mongoose = require("mongoose");
const todoModel = require("../models/todo.models");

// post todo(eta diye create hobe)

const createTodo = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description ) {
      throw new Error("All fields must be filled.");
    }
    const todo = await todoModel.create({ name, description });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get todo
const getTodos = async (req, res) => {
  try {
    const todos = await todoModel.find({});

    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Invalid ID.");
    }

    const todo = await todoModel.findByIdAndDelete(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// patch (update todo)
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, status } = req.body;

    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Invalid ID.");
    }

    const todo = await todoModel.findByIdAndUpdate(
      id,
      {
        name,
        description,
        status,
      },
      { new: true }
    );
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
};
