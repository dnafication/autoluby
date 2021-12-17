'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', { 
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
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE
         });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
