const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      admin: DataTypes.BOOLEAN
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8)
          }
        }
      }
    }
  )

  User.associate = models => {
    User.hasMany(models.Order, { as: 'orders' })
  }

  User.prototype.compareHash = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }

  User.prototype.generateToken = function ({ id }) {
    return jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.ttl })
  }

  return User
}
