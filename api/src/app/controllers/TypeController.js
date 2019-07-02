const { Type, Product } = require('../models')

class TypeController {
  async index (req, res) {
    const { product_id } = req.params

    const types = await Type.findAll({
      where: { product_id },
      include: [{ model: Product, as: 'product', attributes: ['name'] }]
    })

    return res.json(types)
  }

  async store (req, res) {
    const { product_id } = req.params
    const { name, price } = req.body
    const { filename: image } = req.file

    const type = await Type.create({
      product_id,
      name,
      price,
      image
    })

    return res.json(type)
  }

  async update (req, res) {
    const { id } = req.params
    const { name, price } = req.body

    if (!(await Type.findByPk(id))) {
      return res.status(400).json({ error: { message: 'Tipo não encontrado' } })
    }

    await Type.update({ name, price }, { where: { id } })

    return res.send()
  }

  async destroy (req, res) {
    const { id } = req.params

    if (!(await Type.findByPk(id))) {
      return res.status(400).json({ error: { message: 'Tipo não encontrado' } })
    }

    await Type.destroy({ where: { id } })

    return res.send()
  }
}

module.exports = new TypeController()
