const { User, Task } = require('../models/index.js');

class TaskController {
  static loadTasksPageGetHandler(req, res, next) {
    Task.findAll({ where: { organization: req.tokenPayload.organization }, include: User })
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        next(err);
      })
  }

  static addNewTaskPostHandler(req, res, next) {
    Task.create({
      title: req.body.title,
      description: req.body.description,
      status: 0,
      due_date: req.body.due_date,
      UserId: req.tokenPayload.id,
      organization: req.tokenPayload.organization
    })
      .then((data) => {
        res.status(201).json({ msg: "newTaskAddedSuccessfully" })
      })
      .catch((err) => {
        next(err);
      })
  }

  static updateTaskStatusPatchHandler(req, res, next) {
    Task.update({ status: Number(req.body.newStatus) },
      { where: { id: req.params.taskId } })
      .then((data) => {
        res.status(200).json(data);

      })
      .catch((err) => {
        next(err);
      })
  }

  static deleteTaskHandler(req, res, next) {
    Task.destroy({ where: { id: req.params.taskId } })
      .then((result) => {
        res.status(200).json({ msg: `deleteSuccessful` });
      })
      .catch((err) => {
        next(err);
      })
  }

}

module.exports = TaskController;