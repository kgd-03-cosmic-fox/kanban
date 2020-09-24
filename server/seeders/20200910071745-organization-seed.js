'use strict';

const data = [
  {
    "name":"Hektiv9",
    "createdAt":new Date(),
    "updatedAt": new Date()
  },
  {
    "name":"Discard",
    "createdAt":new Date(),
    "updatedAt": new Date()
  },
  {
    "name":"KudKademi",
    "createdAt":new Date(),
    "updatedAt": new Date()
  },
  {
    "name":"T-Mubil",
    "createdAt":new Date(),
    "updatedAt": new Date()
  },
  {
    "name":"Lazadut",
    "createdAt":new Date(),
    "updatedAt": new Date()
  }
]

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert(`Organizations`, data, {})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   return queryInterface.bulkDelete(`Organizations`, null, {})
  }
};
