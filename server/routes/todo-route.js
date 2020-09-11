const express = require(`express`)
const TodoController = require("../controllers/todo-controler")
const router = express.Router()

router.post(`/`,TodoController.postNewTodoByByOrganizationName)
router.get(`/`,TodoController.getAllTodoByOrganizationName)
router.patch(`/:id`,TodoController.patchTodoStatus)

module.exports = router