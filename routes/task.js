const express = require("express");

const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTasks,
  upateTasks,
  deleteTasks,
} = require("../controller/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTasks).patch(upateTasks).delete(deleteTasks);

module.exports = router;
