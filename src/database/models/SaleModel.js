'use strict'

module.exports = (sequelize, DataTypes) => {
    const SaleModel = sequelize.define('sale', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          veicleID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'veicles',
              key: 'id'
            }
          },
          userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id'
            }
          },
          veicleStatus: {
            type: DataTypes.STRING(20),
            allowNull: false,
            references: {
              model: 'veicles',
              key: 'status'
            }
          },
          priceSold: {
            type: DataTypes.DECIMAL,
            allowNull: false
          },
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE
         })
        SaleModel.associate = models => {
          SaleModel.belongsTo(models.VeicleModel, {
            foreingKey: 'veicleID'
        })
          SaleModel.belongsTo(models.UserModel, {
            foreingKey: 'userID'
        })
    }
    return SaleModel
}