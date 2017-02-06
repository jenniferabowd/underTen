'use strict';
module.exports = function(sequelize, DataTypes) {
  var Meals = sequelize.define('Meals', {
    meal_name: DataTypes.STRING(150),
    amount: DataTypes.INTEGER,
    restaurant_name: DataTypes.TEXT,
    location: DataTypes.STRING(200),
    review: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Meals;
};