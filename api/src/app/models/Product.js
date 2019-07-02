module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
  })

  return Product
}
