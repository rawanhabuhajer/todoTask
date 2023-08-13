const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();


router
  .route('/')
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

router
.route('/:id')
.get(todoController.toggleTodoDone)
.patch(todoController.updateTodo)
.delete(todoController.deleteTodo);



module.exports = router;
