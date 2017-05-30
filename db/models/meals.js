// this is the meals table

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Meals = sequelize.define('Meals', {
    meal_name: DataTypes.TEXT,
    amount: DataTypes.TEXT,
    restaurant_name: DataTypes.TEXT,
    location: DataTypes.TEXT,
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
