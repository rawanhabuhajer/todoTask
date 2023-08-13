const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    
  },
  subtasks: {
    type: [Array],
  },
  status: {
    type: String,
    enum: ["todo", "doing", "done"],
    default: "Todo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
