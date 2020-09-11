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
      Task.belongsTo(models.Organization)
    }
  };
  Task.init({
    title: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:"Title cannot be empty"
        }
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.INTEGER,
    due_date: {
      type: DataTypes.DATE,
      validate:{
        isAfter: {
          args: new Date(Date.now()).toLocaleDateString(),
          msg: "Due date invalid"
        }
      }
    },
    OrganizationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};