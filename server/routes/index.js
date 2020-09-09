const express = require(`express`)
const router = express.Router()
const todoRouter = require(`./todo-route`)
const authentication = require(`../middlewares/authentication`)
const Controller = require("../controllers/controller")

router.post(`/register`,Controller.postRegister)
router.post(`/login`,Controller.postLogin)

//Authentication
router.use(`/todo`,authentication)
router.use(`/todo`,todoRouter)


module.exports = router