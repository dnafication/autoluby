'use strict'

module.exports = (sequelize, DataTypes) => {
    const VeicleModel = sequelize.define('veicle', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        brand: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        model: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        yearFabrication: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        kmRotate: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        chassi: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        color: DataTypes.STRING(10),
        status: DataTypes.STRING(20),
        price: DataTypes.DECIMAL,
        createdAt: DataTypes.DATE
    })
    VeicleModel.associate = models => {
        VeicleModel.hasMany(models.SaleModel, {
            foreingKey: 'veicleID'
        })
        VeicleModel.hasMany(models.ReserveModel, {
            foreingKey: 'veicleID'
        })
    }
    return VeicleModel
}