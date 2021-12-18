'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('veicles', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      model: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      yearFabrication: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      rotateKm: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      chassi: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updateddAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('veicles');
  }
};
