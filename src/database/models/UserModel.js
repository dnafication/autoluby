'use strict'

module.exports = (sequelize, DataTypes) => {
    const UserModel = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          cpf: {
            type: DataTypes.STRING(11),
            allowNull: false,
            unique: true
          },
          name: {
            type: DataTypes.STRING(150),
            allowNull: false
          },
          email: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true
          },
          password: {
            type: DataTypes.STRING(20),
            allowNull: false
          },
          avatar: DataTypes.STRING(150),
          biography: DataTypes.STRING(255),
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE
    })
    UserModel.associate = models => {
      UserModel.hasMany(models.SaleModel, {
        foreingKey: 'userID'
    })
      UserModel.hasMany(models.ReserveModel, {
        foreingKey: 'userID'
    })
    }
    return UserModel
}