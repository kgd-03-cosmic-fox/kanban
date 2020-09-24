const express = require(`express`)
const router = express.Router()
const todoRouter = require(`./todo-route`)
const organizationRouter = require(`./organization-route`)
const authentication = require(`../middlewares/authentication`)
const Controller = require("../controllers/controller")

router.post(`/register`,Controller.postRegister)
router.post(`/login`,Controller.postLogin)

router.use(`/todo`,authentication)//Authentication
router.use(`/todo`,todoRouter)
router.use(`/organization`,organizationRouter)

module.exports = router