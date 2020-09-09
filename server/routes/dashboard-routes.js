const express = require('express');
const TaskController = require('../controllers/task-controller.js');
const router = express.Router();

router.get('/', TaskController.loadDashboardPageGetHandler);

module.exports = router;