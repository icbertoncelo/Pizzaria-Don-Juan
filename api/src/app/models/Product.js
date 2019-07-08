module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  })

  Product.associate = models => {
    Product.hasMany(models.Type, { as: 'types' })
    Product.hasMany(models.Size, { as: 'sizes' })
    Product.hasMany(models.OrderItem, { as: 'order_items' })
  }

  return Product
}
