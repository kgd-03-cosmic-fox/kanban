'use strict';
const fs = require('fs')

let stat = JSON.parse(fs.readFileSync('./stat.json' , 'utf-8'))

stat.map(el=>{
  el.createdAt = new Date()
  el.updatedAt = new Date()

  return el
})
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

    return queryInterface.bulkInsert('Stats' , stat , {})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return queryInterface.bulkDelete('Stats' , null , {})
  }
};
