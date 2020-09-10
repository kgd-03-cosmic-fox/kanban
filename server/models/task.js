'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User)
      // define association here
    }
  };
  Task.init({
    title: {
      type: DataTypes.STRING, allowNull: false,
      validate: { notNull: { args: true, msg: "Task Title cannot be empty." } }
    },

    description: DataTypes.TEXT,

    status: {
      type: DataTypes.INTEGER, allowNull: false,
      validate: { notNull: { args: true, msg: "Task Status cannot be empty." } }
    },

    due_date: DataTypes.DATE,
    organization: {
      type: DataTypes.STRING, allowNull: false,
      validate: { notNull: { args: true, msg: "Organization cannot be empty." } }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};