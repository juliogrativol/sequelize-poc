const express = require('express')
const routes = express.Router()
const UserController = require('./controller/UserController')
const AddressController = require('./controller/AddressController')

routes.get('/', (req, res) => { return res.json({ hello: 'world' }) })

routes.post('/users', UserController.store)
routes.get('/users', UserController.list)

routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/addresses', AddressController.list)

module.exports = routes