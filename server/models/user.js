'use strict';
const bcrypt = require('bcryptjs')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.belongsToMany(models.Org , {through : models.OrgMember})
      User.hasMany(models.Task)
      User.hasMany(models.OrgMember)
    }
  };
  User.init({
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          args : true,
          msg : 'username Tidak boleh Null'
        },
        notEmpty : {
          args : true,
          msg : 'username Tidak boleh Kosong'
        }
      } 
    },
    email: {
      type : DataTypes.STRING,
      unique : true,
      allowNull: false,
      validate : {
        isEmail : {
          args : true,
          msg : 'Must be Email value'
        },
        notEmpty : {
          args : true,
          msg : 'Email tidak boleh kosong'
        }
      }  
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          args : true,
          msg : 'Password tidak boleh Null'
        },
        notEmpty : {
          args : true,
          msg : 'Password tidak boleh kosong'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks :{
      beforeCreate(instance , options){

        const salt = bcrypt.genSaltSync(10);
        instance.password = bcrypt.hashSync(instance.password, salt);
        
      }
    }
  });
  return User;
};