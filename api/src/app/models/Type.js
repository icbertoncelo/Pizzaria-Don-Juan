module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT
  })

  Type.associate = models => {
    Type.belongsTo(models.Product, { as: 'product', foreignKey: 'product_id' })
  }

  return Type
}
