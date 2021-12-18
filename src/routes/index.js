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
router.get('/veicles', VeicleController.getAllVeicles)
router.get('/veiclesAvailable', VeicleController.getAvailableVeicles)
router.get('/veiclesSold', VeicleController.getNotAvailableVeicles)
router.get('/veicles/:veicleID', VeicleController.getOneVeicle)
router.delete('/veicles/:veicleID', VeicleController.destroyVeicle)

/* SALE ROUTES */


module.exports = router