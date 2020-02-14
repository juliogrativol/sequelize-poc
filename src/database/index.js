const Sequelize = require('sequelize')
const dbConfir = require('../config/database')
const User = require('../models/User')

const connection = new Sequelize(dbConfir)

User.init(connection)

module.exports = connection
