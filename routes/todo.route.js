const express = require("express");
const {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo.controller");

// router
const router = express.Router();

// get totos
router.get("/", getTodos);

// post todo
router.post("/", createTodo);
// Delete todo
router.delete("/:id", deleteTodo);
// patch todo
router.patch("/:id", updateTodo);

module.exports = router;
