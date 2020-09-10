const express = require('express');
const UserController = require('../controllers/user-controller.js');
const dashboardRouter = require('./tasks-routes.js')
const router = express.Router();

router.post('/login', UserController.loginUserPostHandler);
router.post('/register', UserController.registerNewUserPostHandler);
router.use('/tasks', dashboardRouter);

module.exports = router;