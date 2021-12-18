const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Veicle = require('../models/Veicle')

const connection  = new Sequelize(dbConfig)

User.init(connection)
Veicle.init(connection)

module.exports = connection