module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    amount: DataTypes.INTEGER,
    unit_price: DataTypes.FLOAT
  })

  OrderItem.associate = models => {
    OrderItem.belongsTo(models.Order, { as: 'order', foreignKey: 'order_id' })
    OrderItem.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'product_id'
    })
    OrderItem.belongsTo(models.Type, { as: 'type', foreignKey: 'type_id' })
    OrderItem.belongsTo(models.Size, { as: 'size', foreignKey: 'size_id' })
  }

  return OrderItem
}
