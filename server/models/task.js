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

      Task.belongsTo(models.User)
      Task.belongsToMany(models.Stat , {through : models.TaskStat})
      Task.belongsTo(models.Org)
      Task.hasMany(models.TaskStat)

    }
  };
  Task.init({
    
    taskname: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          args : true,
          msg : 'Task Name tidak boleh kosong'
        },
        notEmpty : {
          args : true,
          msg : 'Task Name tidak boleh kosong'
        }
      } 
    },
    description: {
      
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          args : true,
          msg : 'Description tidak boleh kosong'
        },
        notEmpty : {
          args : true,
          msg : 'Description tidak boleh kosong'
        }
      }
    },
    due_date: {
      type : DataTypes.DATEONLY,
      allowNull : false , 
      validate : {
        notEmpty : {
          args : true , 
          msg : 'Due_date tidak boleh kosong'
        },
        isValid (value){

          let year = new Date().getFullYear()
          let month = new Date().getMonth() + 1
          let date = new Date().getDate()

          if(month < 10){
            month = '0' + month
          }
          if(date < 10){
            date = '0' + date
          }

          let checkDate = `${year}-${month}-${date}`

          if(checkDate > value){
            throw new Error( 'Due date tidak boleh kurang dari hari ini!!!')
          }

        }
      } 
    },
    UserId: DataTypes.INTEGER,
    OrgId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
    hooks : {
      beforeCreate (instance , options){

        instance.StatId = 1
        
      }
    }
  });
  return Task;
};