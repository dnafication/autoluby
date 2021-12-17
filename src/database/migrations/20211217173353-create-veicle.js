'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('veicles', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      brand: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      model: {
        type: Sequelize.STRING(25),
        allowNull: false
      },
      yearFabrication: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      kmRotate: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      chassi: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      color: Sequelize.STRING(10),
      status: Sequelize.STRING(20),
      price: Sequelize.DECIMAL,
      createdAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('veicles');
  }
};
