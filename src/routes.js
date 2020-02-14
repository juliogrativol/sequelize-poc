const express = require('express')
const routes = express.Router()
const UserController = require('./controller/UserController')
const User = require('./models/User')

routes.get('/', (req, res) => { return res.json({ hello: 'world' }) })

routes.post('/users', UserController.store)
routes.get('/users', UserController.list)

module.exports = routes