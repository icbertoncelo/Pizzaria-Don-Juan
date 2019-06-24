const { OrderItem } = require('../models')

class OrderItemController {
  async index (req, res) {
    const { order_id } = req.params

    const items = await OrderItem.findAll(
      { where: { order_id } },
      { include: [{ all: true }] }
    )

    return res.json(items)
  }

  async store (req, res) {
    const { order_id } = req.params
    const { product_id, type_id, size_id, amount, unit_price } = req.body

    const item = await OrderItem.create({
      order_id,
      product_id,
      type_id,
      size_id,
      amount,
      unit_price
    })

    return res.json(item)
  }

  async destroy (req, res) {
    const { id } = req.params

    if (!(await OrderItem.findByPk(id))) {
      return res.status(400).json({ error: { message: 'Item não encontrado' } })
    }

    await OrderItem.destroy({ where: { id } })

    return res.send()
  }
}

module.exports = new OrderItemController()
