const todomodel = require("../model/todoitem");

exports.getalltodo = async (req, res) => {
  try {
    const todo = await todomodel.find();

    if (!todo || todo.length === 0) {
      return res.status(400).json({
        success: false,
        msg: "no task found in your system",
      });
    }
    res.status(200).json({
      success: true,
      todo,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createtodo = async (req, res) => {
  const { task, description, date } = req.body;

  if (req.body === undefined) {
    return res.status(400).json({
      error: "Request body is required",
    });
  }

  if (!task || !description) {
    return res.status(400).json({
      success: false,
      msg: "Task and description are required",
    });
  }

  const todoitem = await todomodel.create({ task, description, date });
  if (!todoitem) {
    return res.status(404).json({
      success: false,
      msg: "task not found",
    });
  }
  res.status(201).json({
    success: true,
    data: todoitem,
    msg: "task created successfully",
  });
};

exports.updatetodo = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const obj = { $set: { ...body } };

  const todo = await todomodel.findByIdAndUpdate(id, obj, { new: true });
  if (!todo) {
    return res.status(404).json({
      success: false,
      msg: "task not found",
    });
  }
  res.status(200).json({
    success: true,
    msg: "task updated successfully",
    data: todo,
  });
};

exports.deletetodo = async (req, res) => {
  const { id } = req.params;
  const todo = await todomodel.findByIdAndDelete(id);
  if (!todo) {
    return res.status(404).json({
      success: false,
      msg: "task not found",
    });
  }
  res.status(200).json({
    success: true,
    msg: "task deleted successfully",
  });
};

exports.markcompleted = async (req, res) => {
  const { id } = req.params;
  const todo = await todomodel.findById(id);
  if (!todo) {
    return res.status(404).json({
      success: false,
      msg: "task not found",
    });
  }
  todo.completed = !todo.completed;
  await todo.save();
  res.status(200).json({
    success: true,
    msg: "task marked as completed",
    data: todo,
  });
};
