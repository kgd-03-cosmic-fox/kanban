const express = require('express')
const router = express.Router()


const StatusController = require('../controllers/status-controller.js')

router.get('/' , StatusController.getAll)

module.exports = router