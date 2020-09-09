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
      // define association here
      Task.belongsTo(models.Organisation)
    }
  };
  Task.init({
    title: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: {
          args: true,
          msg: "title Cannot be empty"
        }
      }
    },
    description: {
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        notNull: {
          args: true,
          msg: "description Cannot be empty"
        }
      }
    },
    OrganisationId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    due_date: {
      type: DataTypes.DATE,
      validate:{
        isValidDate(due_date){
          if(new Date(due_date) < new Date(Date.now()).setHours(0, 0, 0, 0)){
            throw new Error('Invalid Date');
          }
        }
    }
  }
}, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
