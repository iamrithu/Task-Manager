const express = require("express");

const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  upateTask,
  deleteTask,
} = require("../controller/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(upateTask).delete(deleteTask);

module.exports = router;
