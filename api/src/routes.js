const express = require('express')
const routes = express.Router()

const controllers = require('./app/controllers')

/**
 * Users
 */
routes.post('/users', controllers.UserController.store)

module.exports = routes
