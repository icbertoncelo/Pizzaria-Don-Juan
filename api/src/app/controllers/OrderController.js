const { Order } = require('../models')

class OrderController {
  async index (req, res) {
    const orders = await Order.findAll({ include: [{ all: true }] })

    return res.json(orders)
  }

  async show (req, res) {
    const { user_id } = req.params
    const orders = await Order.findAll({ where: { user_id } })

    return res.json(orders)
  }

  async store (req, res) {
    const { user } = req.params
    const { cep, notes, total_value } = req.body

    const order = await Order.create({
      user_id: user,
      cep,
      notes,
      total_value
    })

    return res.json(order)
  }
}

module.exports = new OrderController()
