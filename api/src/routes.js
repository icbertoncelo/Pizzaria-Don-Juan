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
/**
 * Products
 */
routes.get('/products', controllers.ProductController.index)
routes.post('/products', controllers.ProductController.store)
routes.put('/products/:id', controllers.ProductController.update)
routes.delete('/products/:id', controllers.ProductController.destroy)
/**
 * Types
 */
routes.get('/types', controllers.TypeController.index)
routes.post('/types/:product', controllers.TypeController.store)
routes.put('/types/:product/:id', controllers.TypeController.update)
routes.delete('/types/:product/:id', controllers.TypeController.destroy)
routes.delete('/products/:id', controllers.ProductController.destroy)
/**
 * Sizes
 */
routes.get('/sizes', controllers.SizeController.index)
routes.post('/sizes/:product', controllers.SizeController.store)
routes.put('/sizes/:product/:id', controllers.SizeController.update)
routes.delete('/sizes/:product/:id', controllers.SizeController.destroy)

module.exports = routes
