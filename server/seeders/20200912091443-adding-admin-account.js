'use strict';

const bcrypt = require(`bcryptjs`)

const salt = bcrypt.genSaltSync(10);
 

const admins = [
  {
    name: "Hary Dhimas Prakoso",
    email: "dhimas.hary@hacktiv8.com",
    password: bcrypt.hashSync("1234", salt),
    isAdmin: true,
    OrganizationId: 1,
    createdAt: new Date (),
    updatedAt: new Date ()
  },
  {
    name: "Rafael Satriabhi Atheya",
    email: "rafael.satriabhi@gmail.com",
    password: bcrypt.hashSync("1234", salt),
    isAdmin:true,
    OrganizationId: 2,  
    createdAt: new Date (),
    updatedAt: new Date ()
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
   return queryInterface.bulkInsert(`Users`, admins, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  return queryInterface.bulkDelete(`User`, null, {})

  }
};
