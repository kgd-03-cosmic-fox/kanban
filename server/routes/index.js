const express = require('express');
const UserController = require('../controllers/user-controller.js');
const dashboardRouter = require('./dashboard-routes.js')
const router = express.Router();

router.post('/login', UserController.loginUserPostHandler);
router.post('/register', UserController.registerNewUserPostHandler);
router.use('/dashboard', dashboardRouter);

module.exports = router;