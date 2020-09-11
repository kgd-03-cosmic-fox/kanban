const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/task-controller.js')
const TaskAuthorization = require('../middlewares/task-authorization-get&post.js')
const TaskAuthorizationUpdateDelete = require('../middlewares/task-authorization-update&delete')


router.get('/:idOrg' ,TaskAuthorization , TaskController.taskAll)
router.post('/:idOrg'  , TaskController.postTask)
router.patch('/:idTask' ,  TaskController.patchStatus)
router.delete('/delete/:idTask' , TaskController.deleteTask)

module.exports = router