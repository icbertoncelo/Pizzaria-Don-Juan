const express = require('express')
const routes = express.Router()

const controllers = require('./app/controllers')

/**
 * Users
 */
routes.post('/users', controllers.UserController.store)
/**
 * Seesion
 */
routes.post('/sessions', controllers.SessionController.store)

module.exports = routes
