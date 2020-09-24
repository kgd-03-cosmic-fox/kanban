const express = require(`express`)
const TodoController = require("../controllers/todo-controler")
const authorizations = require("../middlewares/authorizations")
const router = express.Router()


router.get(`/`,TodoController.getAllTodoByOrganizationName)
router.post(`/`,TodoController.postNewTodoByByOrganizationName)

router.patch(`/:id`,authorizations, TodoController.patchTodoStatus)
router.delete(`/:id`,authorizations, TodoController.deleteTodoById)

module.exports = router