const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoItemSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },  
    description: {
      type: String,
      required: true,
    },
    date:{
      type:Date,
      required:false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("todoItem", todoItemSchema);
