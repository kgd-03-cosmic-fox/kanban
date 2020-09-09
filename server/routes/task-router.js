const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/task-controller.js')

router.get('/todo/:idOrg' , TaskController.taskToDo)
router.get('/onprocess/:idOrg' , TaskController.taskOnProcess)
router.get('/review/:idOrg' , TaskController.taskReview)
router.get('/done/:idOrg' , TaskController.taskDone)
router.post('/:idOrg' , TaskController.postTask)
router.patch('/todo/:idTask' , TaskController.patchTodo)
router.patch('/onprocess/:idTask' , TaskController.patchOnProcess)
router.patch('/review/:idTask' , TaskController.patchReview)
router.patch('/done/:idTask' , TaskController.patchDone)
router.delete('/delete/:idTask' , TaskController.deleteTask)

module.exports = router