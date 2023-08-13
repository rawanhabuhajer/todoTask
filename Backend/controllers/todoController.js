const Todo = require("../models/TodosModel");

exports.getAllTodos = async (req, res, next) => {
  const Todos = await Todo.find({}).sort({ createdAt: -1 });

  res.status(200).json({
    status: "success",
    results: Todos.length,
    data: {
      Todos,
    },
  });
};

exports.getTodo = async (req, res) => {
  try {
    const Todo = await Todo.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        Todo,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        Todo: newTodo,
        createdAt: Date.now(),
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "invalid data sent",
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const newTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        newTodo,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "invalid data sent",
    });
  }
};

exports.toggleTodoDone = async (request, response) => {
  try {
    const todoRef = await Todo.findById(request.params.id);

    const todo = await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );

    await todo.save();

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deletetodo = await Todo.findByIdAndDelete(req.params.id, {});
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "invalid data sent",
    });
  }
};
