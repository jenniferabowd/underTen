'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Meals', [
      { meal_name: 'Rice and Jerk Chicken',
        amount: '$7',
        restaurant_name: 'B & B Restaurant Corp',
        location: '165 W26th Street, Chelsea',
        review: 'The meal is heavenly guys at such an affordabe price.',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06'
      },
      {
        meal_name: 'Grilled Cheese and Matzo Ball Soup',
        amount: '$10',
        restaurant_name: 'B&H Dairy Kosher',
        location: '127 2nd Avenue, East Village',
        review: 'Amazing food! The grilled cheese is made with challah. An East Village institution.',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06'
      },
      {
        meal_name: 'Chicken Ceasar Salad & Brownie Bites',
        amount: '$9',
        restaurant_name: 'Trader Joes',
        location: '6th between 21st & 22nd',
        review: 'A little healthy & a little indulgent. Watch for long lines.',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06'
      }

    ], {});
  }
};
