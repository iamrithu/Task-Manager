const Task = require("../models/Task");
const AsyncWrapper = require("../middleware/asyncWrpper");

const getAllTasks = AsyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = AsyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = AsyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findById({ _id: taskID });
  if (!task)
    return res.status(404).json({ msg: `No task with id  : ${taskID}` });
  res.status(201).json({ task });
});

const deleteTask = AsyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskID });
  if (!task)
    return res.status(404).json({ msg: `No task with id  : ${taskID}` });
  res.status(200).json({ task });
});

const upateTask = AsyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task)
    return res.status(404).json({ msg: `No task with id  : ${taskID}` });
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  upateTask,
  deleteTask,
};
