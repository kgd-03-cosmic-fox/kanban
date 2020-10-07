const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/task-controller.js')
const TaskAuthorization = require('../middlewares/task-authorization-get&post.js')
const TaskAuthorizationUpdateDelete = require('../middlewares/task-authorization-update&delete')


router.get('/:idOrg' ,TaskAuthorization , TaskController.taskAll)
router.post('/:idOrg'  , TaskAuthorization, TaskController.postTask)
router.patch('/:idTask' ,  TaskAuthorizationUpdateDelete,TaskController.patchStatus)
router.delete('/:idTask' , TaskAuthorizationUpdateDelete,TaskController.deleteTask)

module.exports = router