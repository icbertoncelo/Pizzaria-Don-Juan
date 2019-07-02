const express = require('express')
const routes = express.Router()
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

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
routes.post(
  '/products',
  upload.single('image'),
  controllers.ProductController.store
)
routes.put('/products/:id', controllers.ProductController.update)
routes.delete('/products/:id', controllers.ProductController.destroy)
/**
 * Types
 */
routes.get('/types/:product_id', controllers.TypeController.index)
routes.post(
  '/types/:product_id',
  upload.single('image'),
  controllers.TypeController.store
)
routes.put('/types/:id', controllers.TypeController.update)
routes.delete('/types/:id', controllers.TypeController.destroy)
/**
 * Sizes
 */
routes.get('/sizes/:product_id', controllers.SizeController.index)
routes.post(
  '/sizes/:product_id',
  upload.single('image'),
  controllers.SizeController.store
)
routes.put('/sizes/:id', controllers.SizeController.update)
routes.delete('/sizes/:id', controllers.SizeController.destroy)
/**
 * Orders
 */
routes.get('/orders', controllers.OrderController.index)
routes.get('/orders/:user_id', controllers.OrderController.show)
routes.post('/orders/:user_id', controllers.OrderController.store)
/**
 * Order Items
 */
routes.get('/orderitems/:order_id', controllers.OrderItemController.index)
routes.post('/orderitems/:order_id', controllers.OrderItemController.store)
routes.delete('/orderitems/:id', controllers.OrderItemController.destroy)

module.exports = routes
