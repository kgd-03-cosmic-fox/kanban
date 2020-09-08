'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      due_date: {
        type: Sequelize.DATEONLY
      },
      UserId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Users',
          key : 'id'
        }
      },
      OrgId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Orgs',
          key : 'id'
        }
      },
      StatId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Stats',
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
    return queryInterface.dropTable('Tasks');
  }
};