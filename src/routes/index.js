const express = require('express')

const VeicleController = require('../controllers/VeicleController')
const UserController = require('../controllers/UserController')

const router = express.Router()


/* USERS ROUTES */
router.post('/users', UserController.createUser)

module.exports = router