'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', { 
      id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          veicleID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'veicles',
              key: 'id'
            }
          },
          userID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id'
            }
          },
          veicleStatus: {
            type: Sequelize.STRING(20),
            allowNull: false,
            references: {
              model: 'veicles',
              key: 'status'
            }
          },
          priceSold: {
            type: Sequelize.DECIMAL,
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
