const { OrderItem } = require('../models')

class OrderItemController {
  async index (req, res) {
    const { order_id } = req.params

    const items = await OrderItem.findAll({
      where: { order_id },
      include: [{ all: true }]
    })

    return res.json(items)
  }

  async store (req, res) {
    const { order_id } = req.params
    const { items } = req.body

    await Promise.all(
      items.map(async item => {
        delete item.id;
        await OrderItem.create({ ...item, order_id })
      })
    )
    return res.json(items)
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
