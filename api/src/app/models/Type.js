module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING
  })

  Type.associate = models => {
    Type.belongsTo(models.Product, { as: 'product', foreignKey: 'product_id' })
  }

  return Type
}
