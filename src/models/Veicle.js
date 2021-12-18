const { Model, DataTypes } = require('sequelize')

class Veicle extends Model {
    static init(sequelize) {
        super.init({
            brand: {
                type: DataTypes.STRING(20),
                allowNull: false
              },
              model: {
                type: DataTypes.STRING(50),
                allowNull: false
              },
              yearFabrication: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              rotateKm: {
                type: DataTypes.DECIMAL,
                allowNull: false
              },
              color: {
                type: DataTypes.STRING(20),
                allowNull: false
              },
              chassi: {
                type: DataTypes.STRING(20),
                allowNull: false
              },
              price: {
                type: DataTypes.DECIMAL,
                allowNull: false
              },
              status: {
                type: DataTypes.STRING(20),
                allowNull: false
              }
        }, { sequelize })
    }
}

module.exports = Veicle