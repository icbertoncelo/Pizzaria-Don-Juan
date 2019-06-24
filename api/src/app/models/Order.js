module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    cep: DataTypes.STRING,
    notes: DataTypes.STRING,
    total_value: DataTypes.FLOAT
  })

  Order.associate = models => {
    Order.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' })
  }

  return Order
}
