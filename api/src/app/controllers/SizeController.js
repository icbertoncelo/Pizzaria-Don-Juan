const { Size } = require('../models')

class SizeController {
  async index (req, res) {
    const sizes = await Size.findAll({ include: [{ all: true }] })

    return res.json(sizes)
  }

  async store (req, res) {
    const { product } = req.params
    const { name, additional } = req.body

    const size = await Size.create({
      product_id: product,
      name,
      additional
    })

    return res.json(size)
  }

  async update (req, res) {
    const { id } = req.params
    const { name, additional } = req.body

    if (!(await Size.findByPk(id))) {
      return res.status(400).json({ error: { message: 'Tipo não encontrado' } })
    }

    await Size.update({ name, additional }, { where: { id } })

    return res.send()
  }

  async destroy (req, res) {
    const { id } = req.params

    if (!(await Size.findByPk(id))) {
      return res.status(400).json({ error: { message: 'Tipo não encontrado' } })
    }

    await Size.destroy({ where: { id } })

    return res.send()
  }
}

module.exports = new SizeController()
