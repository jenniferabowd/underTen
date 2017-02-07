'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Meals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      meal_name: {
        type: Sequelize.STRING(150)
      },
      amount: {
        type: Sequelize.INTEGER
      },
      restaurant_name: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.STRING(200)
      },
      review: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Meals');
  }
};
