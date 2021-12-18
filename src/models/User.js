const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            cpf: {
                type: DataTypes.STRING(14),
                unique: true,
                allowNull: false
              },
              name: {
                type: DataTypes.STRING,
                allowNull: false
              },
              email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
              },
              password: {
                type: DataTypes.STRING,
                allowNull: false
              },
              avatar: DataTypes.STRING,
              biography: DataTypes.STRING
        }, { sequelize })
    }
}

module.exports = User