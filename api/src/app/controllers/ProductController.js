const { Product } = require('../models')

class ProductController {
  async index (req, res) {
    const products = await Product.findAll()

    return res.json(products)
  }

  async store (req, res) {
    const { filename: image } = req.file
    const product = await Product.create({ ...req.body, image })

    return res.json(product)
  }

  async update (req, res) {
    const { id } = req.params
    const { name } = req.body

    if (!(await Product.findByPk(id))) {
      return res
        .status(400)
        .json({ error: { messsage: 'Produto não encontrado' } })
    }

    await Product.update({ name }, { where: { id } })

    return res.send()
  }

  async destroy (req, res) {
    const { id } = req.params

    if (!(await Product.findByPk(id))) {
      return res
        .status(400)
        .json({ error: { messsage: 'Produto não encontrado' } })
    }

    await Product.destroy({ where: { id } })

    return res.send()
  }
}

module.exports = new ProductController()
