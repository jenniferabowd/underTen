'use strict';


module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      { user_id: '1',
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@yahoo.com',
        password: 'dontknow',
        course: 'WDI',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06'
      }
    ], {});
  }
};

