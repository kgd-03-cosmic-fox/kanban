const express = require('express')
const router = express.Router()

const OrganizationController = require('../controllers/organization-controller.js')

router.get('/myorganizations' , OrganizationController.myList)
router.get('/members' , OrganizationController.member)
// router.post('/members' , OrganizationController.addMember)
// router.delete('/members/:id' , OrganizationController.deleteMember)


module.exports = router