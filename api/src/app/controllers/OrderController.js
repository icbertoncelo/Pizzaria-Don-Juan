const { Order, User, OrderItem, Product, Type, Size } = require('../models')

class OrderController {
  async index (req, res) {
    const orders = await Order.findAll({
      include: [
        { model: User, as: 'user', attributes: ['name', 'email'] },
        {
          model: OrderItem,
          as: 'items',
          attributes: ['id', 'amount', 'unit_price'],
          include: [
            {
              model: Product,
              as: 'product',
              attributes: ['id', 'name']
            },
            {
              model: Type,
              as: 'type',
              attributes: ['id', 'name', 'price', 'image']
            },
            {
              model: Size,
              as: 'size',
              attributes: ['id', 'name', 'additional']
            }
          ]
        }
      ]
    })

    return res.json(orders)
  }

  async show (req, res) {
    const { user_id } = req.params
    const orders = await Order.findAll({
      where: { user_id },
      include: [
        { model: User, as: 'user', attributes: ['name', 'email'] },
        {
          model: OrderItem,
          as: 'items',
          attributes: ['id', 'amount', 'unit_price'],
          include: [
            {
              model: Product,
              as: 'product',
              attributes: ['id', 'name']
            },
            {
              model: Type,
              as: 'type',
              attributes: ['id', 'name', 'price', 'image']
            },
            {
              model: Size,
              as: 'size',
              attributes: ['id', 'name', 'additional']
            }
          ]
        }
      ]
    })

    return res.json(orders)
  }

  async store (req, res) {
    const { user_id } = req.params
    const { cep, notes, total_value } = req.body

    const order = await Order.create({
      user_id,
      cep,
      notes,
      total_value
    })

    return res.json(order)
  }
}

module.exports = new OrderController()
