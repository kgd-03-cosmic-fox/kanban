const express = require('express')
const router = express.Router()

const UserController = require('../controllers/user-controller.js')

router.post('/login' , UserController.login)
router.post('/register' , UserController.register)

module.exports = router