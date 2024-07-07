const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('myStore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

modole.exports = sequelize
