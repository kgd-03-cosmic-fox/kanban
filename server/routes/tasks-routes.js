const express = require('express');
const TaskController = require('../controllers/task-controller.js');
const router = express.Router();
const authenticateUser = require('../middlewares/authentication.js');
const organizationAuthorization = require('../middlewares/authorization.js');

router.use(authenticateUser);
router.get('/', TaskController.loadTasksPageGetHandler);
router.post('/', TaskController.addNewTaskPostHandler);

router.patch('/:taskId', organizationAuthorization, TaskController.updateTaskStatusPatchHandler);
router.delete('/:taskId', organizationAuthorization, TaskController.deleteTaskHandler);

module.exports = router;