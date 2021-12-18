const express = require('express')

const VeicleController = require('../controllers/VeicleController')
const UserController = require('../controllers/UserController')

const router = express.Router()


/* USERS ROUTES */
router.post('/users', UserController.createUser)
router.get('/users', UserController.findAllUsers)
router.get('/users/:userID', UserController.findOneUser)
router.put('/users/:userID', UserController.updateUser)
router.delete('/users/:userID', UserController.destroyUser)

/* VEICLE ROUTES */
router.post('/veicles', VeicleController.createVeicle)

module.exports = router