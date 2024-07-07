const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Produto = sequelize.define(
  'Produto',
  {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    estoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'produtos',
    timestamps: false,
    // Indicar explicitamente que a chave primária é 'cod'
    primaryKey: 'cod',
  },
)

module.exports = Produto
