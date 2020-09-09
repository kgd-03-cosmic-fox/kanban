const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/task-controller.js')

router.get('/todo/:idOrg' , TaskController.taskToDo)
router.get('/onprocess/:idOrg' , TaskController.taskOnProcess)
router.get('/review/:idOrg' , TaskController.taskReview)
router.get('/done/:idOrg' , TaskController.taskDone)

module.exports = router