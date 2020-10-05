'use strict';
const data = [
  {
    "name":"Hacktiv8",
    "createdAt":new Date(),
    "updatedAt": new Date()
  },
  {
    "name":"Dicoding",
    "createdAt":new Date(),
    "updatedAt": new Date()
  },
  {
    "name":"Arkademy",
    "createdAt":new Date(),
    "updatedAt": new Date()
  },
  {
    "name":"T-schools",
    "createdAt":new Date(),
    "updatedAt": new Date()
  },
  {
    "name":"T-access",
    "createdAt":new Date(),
    "updatedAt": new Date()
  }
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Organisations', data , {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Organisations', null, {});
  }
};
