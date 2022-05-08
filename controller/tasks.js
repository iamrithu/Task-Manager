const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTasks = (req, res) => {
  res.json({ id: req.params.id });
};

const upateTasks = (req, res) => {
  res.json({ id: req.params.id });
};

const deleteTasks = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getAllTasks,
  createTask,
  getTasks,
  upateTasks,
  deleteTasks,
};
