'use strict'

module.exports = (sequelize, DataTypes) => {
    const ReserveModel = sequelize.define('sale', {
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
          priceSold: {
            type: DataTypes.DECIMAL,
            allowNull: false
          },
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE
         })
        ReserveModel.associate = models => {
          ReserveModel.belongsTo(models.VeicleModel, {
            foreingKey: 'veicleID'
        })
          ReserveModel.belongsTo(models.UserModel, {
            foreingKey: 'userID'
        })
    }
    return ReserveModel
}