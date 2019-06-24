require('dotenv').config()
const express = require('express')
const path = require('path')

class Server {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    )
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new Server().express
