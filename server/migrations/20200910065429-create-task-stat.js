'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('TaskStats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StatId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'Stats',
          key: 'id'
        }
      },
      TaskId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Tasks',
          key : 'id'
        }
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
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TaskStats');
  }
};