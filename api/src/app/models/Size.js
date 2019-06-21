module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define('Size', {
    name: DataTypes.STRING,
    additional: DataTypes.FLOAT
  })

  Size.associate = models => {
    Size.belongsTo(models.Product, { as: 'product', foreignKey: 'product_id' })
  }

  return Size
}
