const express = require('express')
const router = express.Router()

const UserRouter = require('./user-router.js')
const TaskRouter = require('./task-router.js')
const OrganizationRouter = require('./organization-router.js')

router.use('/' , UserRouter)
router.use('/tasks' , TaskRouter)
router.use('/organizations' , OrganizationRouter)

module.exports = router