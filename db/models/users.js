'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    user_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING(15),
    last_name: DataTypes.STRING(15),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(25),
    course: DataTypes.STRING(100)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};
