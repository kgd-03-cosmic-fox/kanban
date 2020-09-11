const express = require('express')
const router = express.Router()

const UserRouter = require('./user-router.js')
const TaskRouter = require('./task-router.js')
const OrganizationRouter = require('./organization-router.js')
const authentication = require('../middlewares/authentication.js')
const errorHandler = require('../middlewares/errorHandler.js')

router.use('/' , UserRouter)
router.use(authentication)
router.use('/tasks'  , TaskRouter)
router.use('/organizations' , OrganizationRouter)
router.use(errorHandler)

module.exports = router