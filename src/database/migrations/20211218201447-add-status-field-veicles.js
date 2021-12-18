'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'veicles',
      'status',
      {
        type: Sequelize.STRING(20),
        allowNull: false,
        after: 'price'
      })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'veicles',
      'status',
      {
        type: Sequelize.STRING(20),
        allowNull: false,
        after: 'price'
      })
  }
};
